import useAuth from "./lib/useAuth";
import useAuthCurrentUser from "./lib/useAuthCurrentUser";
import useAuthUsers from "./lib/useAuthUsers";
import useSignOut from "./lib/useSignOut";

const devFlikrAuthHooks = {
    useAuth,
    useSignOut,
    useAuthUsers,
    useAuthCurrentUser,
};

export default devFlikrAuthHooks;

export {
    useAuth,
    useSignOut,
    useAuthUsers,
    useAuthCurrentUser,
};