import React, {useState} from 'react';
import {addPostActionCreator} from "../../Redux/profile-post-reducer";
import {addPostTextActionCreator} from "../../Redux/profile-post-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profileReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
            addPost: (post) => dispatch(addPostActionCreator(post)),
            addPostText: (val) => dispatch(addPostTextActionCreator(val))
        }

}


export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)