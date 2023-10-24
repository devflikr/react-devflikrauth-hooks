import { User, library, onAuthStateUpdate } from "devflikrauth";
import React from "react";

function useAuthUsers(): [currentUser: User[], loading: boolean, error: unknown] {
    const [users, setUsers] = React.useState<User[]>(library.auth);
    const [loading, setLoading] = React.useState<boolean>(!library.hasAuth);
    const [error, setError] = React.useState(library.error);

    React.useEffect(() => {
        const snap = onAuthStateUpdate(() => {
            setUsers(library.auth);
            setError(library.error);
            setLoading(!library.hasAuth);
        });
        return snap;
    }, []);

    return [users, loading, error];
}

export default useAuthUsers;