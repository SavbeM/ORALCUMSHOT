import React, {useState} from 'react';
import classes from "./MyPosts.module.css";


export const MyPosts = (props) => {
    const [postText, setPostText] = useState()
   const posts = props.posts.map(post => <div>{post.post}</div>)
    let addPost = () => {
        props.addPost(postText)
    }

    return (<div className={classes.postContainer}>
            <div className={classes.title}>
                My post
            </div>
            {props.profile?.userId === props.logginedId ? <div className={classes.myPostInput}>
                <input value={postText} onChange={(e) => setPostText(e.target.value)}
                       className={classes.input}></input>
                <button onClick={addPost} className={classes.send}>SEND</button>
                <div>{posts}</div>
            </div> : null}
        </div>

    )

}
