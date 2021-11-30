import { USER_LOGIN_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../actionTypes"
import axios from 'axios';
const RegisterUserAction = (name, email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_REGISTER_REQUEST,
            })
            //api call
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const { data } = await axios.post('/api/users/register', { name, email, password }, config);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            });
            //saving data to local storage
            localStorage.setItem('user', JSON.stringify(data));
        }
        catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message,
            })
        }
    }
};

const LoginUserAction = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST,
            })
            //api call
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const { data } = await axios.post('/api/users/login', { email, password }, config);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            });
            //saving data to local storage
            localStorage.setItem('user', JSON.stringify(data));
        }
        catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message,
            })
        }
    }
};

const logoutUserAction = () => {
    return async (dispatch) => {
        try {
            localStorage.removeItem('user');
            dispatch({
                type: USER_LOGOUT_SUCCESS,
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}
export { RegisterUserAction, LoginUserAction, logoutUserAction };