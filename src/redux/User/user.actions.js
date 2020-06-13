import { userActionTypes } from './user.type'
import axios from '../../../config/axios'
import Cookies from 'js-cookie'
export const setUser = user => {
    return {
        type: userActionTypes.SET_USER,
        payload: user
    };
};

export const accountUser = user => {
    return {
        type: userActionTypes.ACCOUNT_USER,
        payload: user
    };
};
export const removeUser = () => {
    return {
        type: userActionTypes.REMOVE_USER
    };
};

// Login User
export const startSetUser = formData => {
    return dispatch => {
        axios
            .post("/login", formData)
            .then(response => {
                if (response.data.errors) {
                    window.alert(response.data.errors);
                } else {

                    // var date = new Date(new Date().getTime() + 2 * 60 * 1000);
                    Cookies.set("token", response.data.token, { expires: 1 / 24, path: '/' })
                    dispatch(setUser(response.data.user));
                }
            })
            .catch(err => {
                window.alert(err);
            });
    };
};

// Logout User
export const startRemoveUser = () => {
    return dispatch => {
        axios
            .delete("/logout", {
                headers: {
                    "x-auth": Cookies.get("token")
                }
            })
            .then(response => {
                Cookies.remove("token");
                dispatch(removeUser());
            })
            .catch(err => {
                window.alert(err);
            });
    };
};