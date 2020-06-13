import { userActionTypes } from './user.type'



const userReducer = (state = {}, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return { ...action.payload };
        case userActionTypes.ACCOUNT_USER:
            return { ...action.payload };
        case userActionTypes.REMOVE_USER:
            return {}
        default:
            return state
    }
}


export default userReducer