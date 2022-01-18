import React, {useEffect, useState} from "react";



export const Status = (props) => {

   const [isEditMod, setEditMode] = useState(false)
    const [statusText, setStatusText] = useState(props.status)
    const confirm = () => {
        props.setStatusThunk(statusText)
        setEditMode(false)
    }
    useEffect((prevProps)=> {

           setStatusText(props.status)

    }, [props.status])



    return (
        <div>
            {isEditMod ? <div>
                    <div><input value={statusText} onChange={(e) => setStatusText(e.target.value)}/></div>
                    <button onClick={() => confirm()}>Confirm</button>
                </div>
                : props.loggId === props.id ?
                    <div><span
                        onClick={() => setEditMode(true)}>{!props.status ? "default" : props.status}</span>
                    </div> : <span>{!props.status ? "default" : props.status}</span>}

        </div>
    )
}
