import React from "react";
import {observe} from "web-vitals/dist/modules/lib/observe";


const store =
    {
        __state: {
            dialogsPage: {
                dialogs: [{message: 'ababa', name: 'Ignat', id: 1}, {message: 'abobob', name: 'Goga', id: 2},
                    {message: 'abububu', name: 'Irakli', id: 3}],
            },

            profilePage: {
                posts: [{post: 'post message'}, {post: 'gnida'},]
            },
        },
        subscriber(observer) {
            this.__callSubscriber = observer
        },

        __callSubscriber(){},

        getState(){return this.__state},

        dispatch(action) {

            if (action.type === 'ADD-POST') {
                let newPost = {
                    post: action.post,
                }
                this.__state.profilePage.posts.push(newPost)
                this.__callSubscriber()


            }

        }
    }


export default store
