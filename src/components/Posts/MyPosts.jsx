import React, {useState} from 'react';
import classes from "./MyPosts.module.css";





const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
        let post = newPostElement.current.value
        props.dispatch({type: 'ADD-POST', post: post})
    }
    let ProfilePosts = props.posts.map((p) => <div>{p.post}</div>)


        return (<div className={classes.postContainer}>
            <div className={classes.title}>
                My post
            </div>
            <div className={classes.myPostInput}>
                <input ref={newPostElement}  className={classes.input}></input>
                <button onClick={addPost} className={classes.send}>SEND</button>
            </div>
                {ProfilePosts}

        </div>

    )
}
export default MyPosts