import { useEffect, useState } from "react";
import { UserSession, getUserSessions, onAuthStateUpdate, removeUserSession } from "devflikrauth";
import useAuthCurrentUser from "./useAuthCurrentUser";

function useAuthUserSessions(): [sessions: UserSession[], removeSession: (sessionToken: string) => Promise<UserSession[]>, error: unknown] {
    const [sessions, setSessions] = useState<UserSession[]>([]);
    const [error, setError] = useState<unknown>();
    const [user] = useAuthCurrentUser();

    useEffect(() => {
        if (!user) return;
        getUserSessions(user).then((res) => {
            setSessions(res as UserSession[]);
        }).catch((err) => console.error(err));
    }, [user]);

    useEffect(() => {
        const snapshot = onAuthStateUpdate((_, authLib) => {
            setError(authLib.error);
        });
        return snapshot;
    }, []);


    async function removeSession(sessionToken: string) {
        if (!user) return sessions;
        return await removeUserSession(user, sessionToken).then((res) => {
            setSessions(res as UserSession[]);
            return res;
        });
    }

    return [sessions, removeSession, error];
}

export default useAuthUserSessions;