import classes from "./Profile.module.css";
import React from "react";


const UserProfileInfo = () => {
   return(<div>
    <div className={classes.info}>
        <div className={classes.ava}>
            <img src="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png"></img>
        </div>
        <div className={classes.textInfo}>
            <div className={classes.title}>
                Mark Selikhov
            </div>
            <div className={classes.subtitle}>
                <p>Age</p>
                <p>Country</p>
                <p>Number</p>
            </div>
        </div>
    </div>
       </div>
       )};

 export default UserProfileInfo