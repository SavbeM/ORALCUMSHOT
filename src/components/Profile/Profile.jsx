import React from 'react';
import UserProfileInfo from "./UserProfileInfo";
import {MyPostContainer} from "../Posts/MyPostContainer";
import preloader from  "../../assets/preloader.gif"



export const Profile = (props) => {

    return (
        <div>
            {(!props.profile) ? <img src={preloader}/> : <UserProfileInfo setStatusThunk={props.setStatusThunk} status={props.status} logginedId={props.logginedId} profile={props.profile}/>}
            <MyPostContainer/>
        </div>
    );
}
