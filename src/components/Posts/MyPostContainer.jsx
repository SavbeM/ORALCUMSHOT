import React from 'react';
import {addPostActionCreator} from "../../Redux/profile-post-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {getPosts} from "../../Redux/profile-selectors";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer,
        posts: getPosts(state),
        profile: state.profileReducer.profile,
        logginedId: state.auth.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
            addPost: (post) => dispatch(addPostActionCreator(post)),
        }

}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)