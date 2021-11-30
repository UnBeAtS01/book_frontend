import React from 'react';
import { Tabs, Tab, Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../redux/actions/users/userAction';
const NAVBAR = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handle_logout = () => {
        dispatch(logoutUserAction());
        navigate('/')
    }
    const data = useSelector(state => state.userLogin.userInfo);
    return (
        <Box sx={{ width: '100%' }}>

            {data ? (<Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
            ><Tab value="two" component={Link} to={'/about'} sx={{ marginLeft: '2%', marginRight: '2%' }} label="About" />
                <Tab value="one" component={Link} to={'/addbook'} sx={{ marginLeft: '2%', marginRight: '2%' }} label="ADD BOOK" />

                <Tab value="three" component={Link} to={'/booklist'} sx={{ marginLeft: '2%', marginRight: '2%' }} label="Book List" />
                <Tab value="four" onClick={handle_logout} sx={{ marginLeft: '2%', marginRight: '2%' }} label="Logout" />
            </Tabs>
            ) : ""}
            {!data ? (<Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
            > <Tab value="two" component={Link} to={'/about'} sx={{ marginLeft: '2%', marginRight: '2%' }} label="About" />
                <Tab value="five" component={Link} to={'/registeruser'} sx={{ marginLeft: '2%', marginRight: '2%' }} label="Register" />
                <Tab value="six" component={Link} to={'/login'} sx={{ marginLeft: '2%', marginRight: '2%' }} label="Login" />
            </Tabs>) : ""}

        </Box >)


};

export default NAVBAR;