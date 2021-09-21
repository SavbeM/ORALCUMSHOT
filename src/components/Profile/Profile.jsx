import React from 'react';
import classes from "./Profile.module.css";
import UserProfileInfo from "./UserProfileInfo";
import MyPosts from "../Posts/MyPosts";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.upp}>
                <img
                    src="https://ostagram1.ams3.cdn.digitaloceanspaces.com/uploads/content/image/1802077/img_fc7bc2b3b9.jpg"></img>
            </div>
            <UserProfileInfo/>
            <MyPosts dispatch={props.dispatch} posts={props.ProfilePosts}/>
                <div className={classes.post}>
                </div>
            </div>
    );
}
export default Profile