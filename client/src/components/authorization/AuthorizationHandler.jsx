/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import api from '../api';

/**
 * A function that handles login
 * 
 * @param {*} dispatch dispatcher that handles the status of authorization
 * @param {*} loginData a dictionary with login and password
 * @returns Received data if the request is successful otherwise it sets error
 */
export async function login(dispatch, loginData) {
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await api.post(`/login`, JSON.stringify(loginData));
        let data = await response.data;
        
        if (data.error)
        {
            dispatch({type: 'LOGIN_ERROR', error: data.error});
        }
        else
        {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}

/**
 * A function that handles logout
 * 
 * @param {*} dispatch dispatcher that handles the status of authorization
 */
export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    window.location.reload();
}
