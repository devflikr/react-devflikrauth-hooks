import { User, library, onAuthStateUpdate, setCurrentAuthIndex } from "devflikrauth";
import React from "react";

function useAuthCurrentUser(index?: number): [currentUser: User | null, loading: boolean, error: unknown] {
    const [user, setUser] = React.useState<User | null>(library.auth[library.index] || null);
    const [loading, setLoading] = React.useState<boolean>(!library.hasAuth);
    const [error, setError] = React.useState(library.error);

    React.useEffect(() => {
        if (index !== undefined && !Number.isNaN(index) && index > -1) setCurrentAuthIndex(index);
    }, []);

    React.useEffect(() => {
        const snap = onAuthStateUpdate((currentUser) => {
            setUser(currentUser);
            setError(library.error);
            setLoading(!library.hasAuth);
        });
        return snap;
    }, []);

    return [user, loading, error];
}

export default useAuthCurrentUser;