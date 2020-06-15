import { userActionTypes } from './user.type'
import axios from '../../../config/axios'
import Cookies from 'js-cookie'
import swal from 'sweetalert'
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
export const startSetUser = (formData) => {
    console.log(formData)
    console.log('2')
    return async (dispatch) => {
        console.log('d')
        const response = await axios.post("/login", formData)
        console.log(response)
        try {
            if (response.data.err) {
                swal('Error', String(response.data.err), 'error')
                console.log('3')
            } else {

                // var date = new Date(new Date().getTime() + 2 * 60 * 1000);
                Cookies.set("token", response.data.sessionId, { expires: 1 / 24, path: '/' })
                dispatch(setUser(response.data.user));
                swal('Success', 'Login Successfully', 'success')
                console.log('4')
            }
        } catch (err) {
            swal('Error', String(err), 'error')
        }
        return 'done';
    }
}

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