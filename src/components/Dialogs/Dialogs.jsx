import React from 'react';
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";



const Dialogs = (props) => {
    const messages = props.messages.map((e)=> <DialogsItem message={e.message} name={e.name} id={e.id}/>)

    return (<div>
            <div className={classes.content}>
                <div className={classes.userList}></div>

                <div className={classes.Messages}>
                    {messages}
                </div>
            </div>
            <div className={classes.MessageInput}>
                <input/>
            </div>
        </div>
    );
}
export default Dialogs