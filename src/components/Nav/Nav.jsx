import React from  'react';
import "./Nav.module.css";
const Nav = () => {
    return (            <nav className='nav'>
            <div><a href="#" className='item'>News</a></div>
            <div><a href="#" className='item'>Messages</a></div>
            <div><a href="#" className='item'>Music</a></div>
        </nav>
    );
}

export default Nav