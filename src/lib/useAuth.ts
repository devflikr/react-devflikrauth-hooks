import React from "react";
import { library, AuthLibrary, onAuthStateUpdate } from "devflikrauth";

function useAuth(): AuthLibrary {
    const [auth, setAuth] = React.useState<AuthLibrary>(library);

    React.useEffect(() => {
        const snap = onAuthStateUpdate(() => {
            setAuth(library);
        });
        return snap;
    }, []);

    return auth;
}

export default useAuth;