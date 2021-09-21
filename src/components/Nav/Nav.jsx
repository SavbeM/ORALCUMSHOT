import React from  'react';
import classes from "./Nav.module.css";
import {Link} from "react-router-dom";
const Nav = () => {
    return (  <nav className={classes.nav}>
            <div><Link to={'/dialogs'} className={classes.item}>Dialogs</Link></div>
            <div><Link to={'/profile'} className={classes.item}>Profile</Link></div>
        </nav>
    );
}

export default Nav