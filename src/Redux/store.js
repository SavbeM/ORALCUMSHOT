import React from "react";
import {profilePostReducer} from "./profile-post-reducer";
import {messagesDialogsReducer} from "./messages-dialogs-reducer";


const store =
    {
        __state: {
            dialogsPage: {
                dialogs: [{message: 'ababa', name: 'Ignat', id: 1}, {message: 'abobob', name: 'Goga', id: 2},
                    {message: 'abububu', name: 'Irakli', id: 3}],
                dialogsText: []
            },

            profilePage: {
                posts: [{post: 'post message'}, {post: 'gnida'},],
                postText: []

            },
        },
        subscriber(observer) {
            this.__callSubscriber = observer
        },

        __callSubscriber(){},

        getState(){return this.__state},

        dispatch(action) {
            this.__state.profilePage.posts = profilePostReducer(this.__state.profilePage.posts, action)
            this.__state.dialogsPage.dialogs = messagesDialogsReducer(this.__state.dialogsPage.dialogs, action)
            this.__callSubscriber()
        }
    }


export default store
