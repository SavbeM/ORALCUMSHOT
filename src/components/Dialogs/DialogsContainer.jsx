import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../Redux/messages-dialogs-reducer";
import {addMessageTextActionCreator} from "../../Redux/messages-dialogs-reducer";
import {connect} from "react-redux";
import {authCheckHoc} from "../hoc/authCheck";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsReducer,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addMessage: (message) => dispatch(addMessageActionCreator(message)),
        addMessageText: (val) => dispatch(addMessageTextActionCreator(val))
    }
}

export default compose(
    authCheckHoc,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

