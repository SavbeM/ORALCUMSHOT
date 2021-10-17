import React from 'react';
import {combineReducers, createStore} from "redux";
import {profilePostReducer} from "./profile-post-reducer";
import {messagesDialogsReducer} from "./messages-dialogs-reducer";



let reducers =  combineReducers({
    profileReducer: profilePostReducer,
    dialogsReducer: messagesDialogsReducer,
})


let store = createStore(reducers);

window.store = store

export default store