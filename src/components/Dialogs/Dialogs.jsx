import React from 'react';
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem";



const Dialogs = (props) => {


    const messages = props.dialogsPage.dialogs.map((e)=> <DialogsItem message={e.message} name={e.name} id={e.id}/>)


    let addMessage = () => {
        props.addMessage(props.dialogsPage.dialogsText)
    }

    return (<div>
            <div className={classes.content}>
                <div className={classes.userList}></div>

                <div className={classes.Messages}>
                    {messages}
                </div>
            </div>
            <div className={classes.MessageInput}>
                <input className={classes.inputMess} value={props.dialogsPage.dialogsText} onChange={(val) => props.addMessageText(val.target.value)} />
                <button className={classes.sendButton} onClick={addMessage}>SEND</button>
            </div>
        </div>
    );
}
export default Dialogs