import React from 'react';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profilePostReducer} from "./profile-post-reducer";
import {messagesDialogsReducer} from "./messages-dialogs-reducer";
import {usersPageReducer} from "./users-page-reducer";
import {authReducer} from "./auth-reducr";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer";





let reducers =  combineReducers({
    profileReducer: profilePostReducer,
    dialogsReducer: messagesDialogsReducer,
    usersReducer: usersPageReducer,
    auth: authReducer,
    app: appReducer

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)
));

window.__store__ = store

export default store