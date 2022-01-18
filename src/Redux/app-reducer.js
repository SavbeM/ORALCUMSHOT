import {authThunk} from "./auth-reducr";

let defaultInitial = {
    isInitialized: false
}

const SET_INITIALIZING_SUCCES = "SET_INITIALIZING_SUCCES"


export const initializing = () => {
    return (dispatch) => {
        let promise = dispatch(authThunk())
        promise.then(() => {
            debugger
            dispatch(setInitializingSucces())
        })
    }
}

export const setInitializingSucces = () => {
    return {
        type: SET_INITIALIZING_SUCCES
    }
}


export const appReducer = (state = defaultInitial, action) => {

    switch (action.type) {
        case SET_INITIALIZING_SUCCES:
            return {
                ...state,
                isInitialized: true
            }

        default:
            return {...state}
    }
}

