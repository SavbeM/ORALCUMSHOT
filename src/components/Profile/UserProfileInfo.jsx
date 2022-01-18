import classes from "./Profile.module.css";
import React from "react";
import avatar from "../../assets/avatar.png"
import {Status} from "./Status";


const UserProfileInfo = (props) => {

   return(<div className={classes.content}>
           <div className={classes.upp}>
               <img
                   src="https://ostagram1.ams3.cdn.digitaloceanspaces.com/uploads/content/image/1802077/img_fc7bc2b3b9.jpg"></img>
           </div>
    <div className={classes.info}>
        <div className={classes.ava}>
            {(!props.profile.photos.large) ? <img src={avatar}/> : <img src={props.profile.photos.large} alt=""/>}
        </div>
        <div className={classes.textInfo}>
            <div className={classes.title}>
                {props.profile.fullName }
            </div>

            <div className={classes.subtitle}>
                <Status setStatusThunk={props.setStatusThunk} status={props.status} loggId={props.logginedId} id={props.profile.userId}/>
            </div>
        </div>
    </div>
       </div>
       )};

 export default UserProfileInfo