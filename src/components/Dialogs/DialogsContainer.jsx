import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../Redux/messages-dialogs-reducer";
import {addMessageTextActionCreator} from "../../Redux/messages-dialogs-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsReducer ,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addMessage: (message) => dispatch(addMessageActionCreator(message)),
        addMessageText: (val) => dispatch(addMessageTextActionCreator(val))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer