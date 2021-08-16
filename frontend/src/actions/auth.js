import { types } from "../types";
import { firebase, googleAuthProvider } from "../firebase/config";

export const emailAndPasswordLogin = (userMail, userPass) => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(userMail, userPass)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    };
};

export const googleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    };
};

export const registerUser = (bank, userName, userMail, userPass) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(userMail, userPass)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: userName });
                dispatch(login(user.uid, user.displayName));
            });
    };
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch({
            type: types.logout
        })
    };
};