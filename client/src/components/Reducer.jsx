/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";

/**
 * Contains data about the user in session
 */
export const initialState = {
    id: "" || user.id,
    loading: false,
    errorMessage: user.error
};
 

/**
 * A function that handles dispatching. Sets the data considering a given action
 * 
 * @param {*} initialState data about the user
 * @param {*} action status of request
 * @returns Current status of the user in session
 */
export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
        return {
            ...initialState,
            loading: true
        };
        case "REQUEST_SIGNUP":
        return {
            ...initialState,
            loading: true
        };
        case "LOGIN_SUCCESS":
        return {
            ...initialState,
            user: action.payload.id,
            loading: false
        };
        case "SIGNUP_SUCCESS":
        return {
            ...initialState,
            user: action.payload.id,
            loading: false
        }
        case "LOGOUT":
        return {
            ...initialState,
            user: ""
        };
    
        case "LOGIN_ERROR":
        return {
            ...initialState,
            loading: false,
            errorMessage: action.error
        };

        case "SIGNUP_ERROR":
        return {
            ...initialState,
            loading: false,
            errorMessage: action.error
        }

        case "VIDEO_LOADING_ERROR":
        return {
            ...initialState,
            loading: false,
            errorMessage: action.error
        }
    
        default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
};
