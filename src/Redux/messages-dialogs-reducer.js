let defaultInitial = {
    dialogs: [{message: 'TYPE YOUR MESSAGE', name: 'USER', id: 1},],
    dialogsText: "",
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'

export const addMessageActionCreator = (message) => {
    return {type: ADD_MESSAGE, message: message}
}

export const addMessageTextActionCreator = (text) => {
    return {type: ADD_MESSAGE_TEXT, text: text}
}

export const messagesDialogsReducer = (state = defaultInitial, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                dialogs: [...state.dialogs, {
                    message: action.message,
                    id: Math.random(),
                    name: 'Чел',
                }],
                dialogsText: ""
            }

        }
        case ADD_MESSAGE_TEXT:
            return {...state, dialogsText: action.text}

        default:
            return {...state}
    }
}

