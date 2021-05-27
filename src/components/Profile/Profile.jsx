import React from  'react';
import classes from "./Profile.module.css";
const Profile = () => {
   return( <div className={classes.content}>
        <div className={classes.upp}>
            <img src="https://ostagram1.ams3.cdn.digitaloceanspaces.com/uploads/content/image/1802077/img_fc7bc2b3b9.jpg"></img>
        </div>
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
        <div className={classes.postContainer}>
            <div className={classes.title}>
                My post
            </div>
            <div className={classes.myPostInput}>
                <input className={classes.input}></input>
                <button className={classes.send}>SEND</button>
            </div>

            <div className={classes.post}>
                My post about...
            </div>
        </div>
    </div>
   );
}
export default Profile