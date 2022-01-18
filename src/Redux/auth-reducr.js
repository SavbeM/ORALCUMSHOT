import {authMe, login, logout} from "../api";


let defaultInitial = {
    id: null,
    email: null,
    login: null,
    password: null,
    isAuth: false,
    error: null
}

const SET_USER_DATA = "SET-USER-DATA"
const LOGOUT = "LOGOUT"
const ALERT_ERROR = "ALERT_ERROR"

export const logoutThunk = () => {

    return (dispatch) => {
        logout().then(data=>{
            if(data.resultCode === 0){
                dispatch(logoutUser())
            }
        })
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}

export const loginThunk = (loginData) => {
    return (dispatch) => {
        login(loginData).then(data => {
            if (data.resultCode === 0) {
                dispatch(authThunk())
                debugger
            }
            else if(data.resultCode === 1){
                dispatch(alertError(data.messages))
            }
        })
    }
}


const alertError = (error) => {
    return{
        type: ALERT_ERROR, error
    }
}

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA, data
    }
}

export const authThunk = () => {
    return (dispatch) => {
       return  authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        })
    }
}

export const authReducer = (state = defaultInitial, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true
            }

        }
        case LOGOUT: return {
            isAuth: false,
            id: null,
            email: null,
            login: null,
            password: null,
        }
        case ALERT_ERROR: return {
            ...state,
            error: action.error
        }
        default:
            return {...state}
    }
}

