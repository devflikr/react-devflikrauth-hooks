import { signOut } from "devflikrauth";


function useSignOut() {
    return function () {
        return signOut();
    };
}

export default useSignOut;