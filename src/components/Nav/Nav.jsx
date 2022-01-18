import React from  'react';
import classes from "./Nav.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
const Nav = (props) => {
    return (  <nav className={classes.nav}>
            <div><Link to={'/dialogs'} className={classes.item}>Dialogs</Link></div>
            <div><Link to={`/profile/${props.profileLogined}`} className={classes.item}>Profile</Link></div>
            <div><Link to={'/users'} className={classes.item}>Users</Link></div>
        </nav>
    );
}

let mapStateToProps = (state) => {
    return{
        profileLogined: state.auth.id
    }
}

export const NavContainer = connect(mapStateToProps, {})(Nav)

