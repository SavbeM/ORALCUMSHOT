import React from 'react';
import classes from "./Profile.module.css";
import UserProfileInfo from "./UserProfileInfo";
import {MyPostContainer} from "../Posts/MyPostContainer";



const Profile = () => {
    return (
        <div>
                <UserProfileInfo/>
                <MyPostContainer />
        </div>
    );
}
export default Profile