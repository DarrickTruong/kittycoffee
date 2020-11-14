import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/style.css';
import kitty from '../img/kitty.png';

const Nav = () => {
    return (
        <nav id="nav" className="d-flex flex-column p-3 border rounded bg-secondary">
            
            <Link className="text-light" to="/">Home</Link>
            <Link className="text-light" to="/shop">Shop</Link>    
            
            <img className="mt-2 align-self-center" src={kitty} alt="coffee icon"/>
        </nav>

        
    );
};

export default Nav;