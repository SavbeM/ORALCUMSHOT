import React from  'react';
import classes from "./Header.module.css"
import {Link} from "react-router-dom";
const Header = (props) => {
      return (  <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png"></img>
              {props.isAuth === true ? <div><div className={classes.loginedUser}>{props.login}</div>
              <button onClick={()=>props.logoutThunk()}>Logout</button>
              </div>
                  : <Link to={"/login"}>SIGN IN</Link>}
        </header>
    );
}

export default Header