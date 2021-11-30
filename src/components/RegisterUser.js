import { useState } from "react";
import { TextField, Button, formHelperTextClasses } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUserAction } from '../redux/actions/users/userAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const RegisterUser = () => {
    const [Name, setname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handle_name = (e) => {
        setname(e.target.value);
    }
    const handle_email = (e) => {
        setEmail(e.target.value);
    }
    const handle_password = (e) => {
        setPassword(e.target.value);
    }
    const submit_book = () => {

        dispatch(RegisterUserAction(Name, Email, Password));
    }

    //grab user login from store
    const userExists = useSelector(state => state.userLogin.userInfo);
    //redirect if user already login
    const navigate = useNavigate();
    useEffect(() => {
        if (userExists) {
            alert("you already login");
            navigate('/');
        }
    }, [userExists])
    return (
        <div>
            <div> <TextField id="standard-basic" label="Name" variant="standard" onChange={handle_name} value={Name} />
                <TextField id="standard-basic" label="Email" variant="standard" onChange={handle_email} value={Email} />
                <TextField id="standard-basic" label="Password" variant="standard" onChange={handle_password} value={Password} />
            </div>
            <div>
                <Button variant="outlined" color="error" onClick={submit_book}>
                    +Register
        </Button>
            </div>
        </div>
    )
}
export default RegisterUser;