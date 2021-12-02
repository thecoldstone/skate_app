
import api from '../api';

export async function signup(dispatch, singupData) {
    try {
        dispatch({type: 'REQUEST_SIGNUP' });
        let response = await api.post(`/signup`, JSON.stringify(singupData));
        let data = await response.data;

        if (!data.error) {
            dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'SIGNUP_ERROR', error: data.error });
        return;
    } catch(error) {
        dispatch({ type: 'SIGNUP_ERROR', error: error });
    }
}

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
   
export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    window.location.reload();
}
