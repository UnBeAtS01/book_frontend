import { useState } from "react";
import { TextField, Button, formHelperTextClasses } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { LoginUserAction } from '../redux/actions/users/userAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginUser = ({ history }) => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error, userInfo } = useSelector(state => state.userLogin);
    const handle_email = (e) => {
        setEmail(e.target.value);
    }
    const handle_password = (e) => {
        setPassword(e.target.value);
    }
    const Login_handle = () => {

        dispatch(LoginUserAction(Email, Password));
    }

    //grab user login from store
    const userExists = useSelector(state => state.userLogin.userInfo);
    //redirect if user already login
    const navigate = useNavigate();
    useEffect(() => {
        if (userExists) {
            navigate('/addbook');
        }
    }, [userExists])
    return (
        <div>
            {loading && <h1>loading</h1>}
            {error && <h1>something went wrong</h1>}
            <div>
                <TextField id="standard-basic" label="Email" variant="standard" onChange={handle_email} value={Email} />
                <TextField id="standard-basic" label="Password" variant="standard" onChange={handle_password} value={Password} />
            </div>
            <div>
                <Button variant="outlined" color="error" onClick={Login_handle}>
                    +Login
        </Button>
            </div>
        </div>
    )
}
export default LoginUser;