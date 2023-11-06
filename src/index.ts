import useAuth from "./lib/useAuth";
import useSignOut from "./lib/useSignOut";
import useAuthUsers from "./lib/useAuthUsers";
import useAuthCurrentUser from "./lib/useAuthCurrentUser";
import useAuthUserSessions from "./lib/useAuthUserSessions";

const devFlikrAuthHooks = {
    useAuth,
    useSignOut,
    useAuthUsers,
    useAuthCurrentUser,
    useAuthUserSessions,
};

export default devFlikrAuthHooks;

export {
    useAuth,
    useSignOut,
    useAuthUsers,
    useAuthCurrentUser,
    useAuthUserSessions,
};