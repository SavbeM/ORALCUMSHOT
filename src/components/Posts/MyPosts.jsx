import React, {useState} from 'react';
import classes from "./MyPosts.module.css";




export const MyPosts = (props) => {

    let ProfilePosts = props.profilePage.posts.map((p) => <div>{p.post}</div>)

    let addPost = () => {
        props.addPost(props.profilePage.postText)
    }

    return (<div className={classes.postContainer}>
            <div className={classes.title}>
                My post
            </div>
            <div className={classes.myPostInput}>
                <input value={props.profilePage.postText} onChange={(val) => props.addPostText(val.target.value)}
                       className={classes.input}></input>
                <button onClick={addPost} className={classes.send}>SEND</button>
            </div>
            {ProfilePosts}
        </div>

    )

}
