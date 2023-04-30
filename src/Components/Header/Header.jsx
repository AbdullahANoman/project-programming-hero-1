import React, { useContext } from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut();
    }
    console.log(user)
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signUp">Sign Up</Link>
           
            </div>
            {
            user && <><p className='text-white'>{user.email}</p> <button onClick={handleLogOut}>Sign Out</button></>
           }
        </div>
    );
};

export default Header;