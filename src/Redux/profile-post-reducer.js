import {getStatus, getUserProfile, updateStatus} from "../api";



let defaultInitial = {
    posts: [],
    postText: "",
    profile: null,
    status: null
}

const ADD_POST = 'ADD-POST'
const GET_USER_PROFILE = "GET_USER_PROFILE"
const GET_STATUS = "GET_STATUS"
const SET_STATUS = "SET_STATUS"


export const  getUserStatusThunk = (id) => {
    return (dispatch) => {
        getStatus(id).then(data => {
            dispatch(getUserStatus(data))
        })
    }
}

export const setStatusThunk = (status) => {
    return (dispatch) => {
        updateStatus(status).then(data => {
            dispatch(setUserStatus(status))
        })
    }
}

export const setUserStatus = (status) => {
    return{type: SET_STATUS, status}
}

export const getUserStatus = (status) => {
    return{type: GET_STATUS, status}
}

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}


export const setUserProfile = (profile) => {
    return {
        type: GET_USER_PROFILE, profile
    }
}


export const addPostActionCreator = (post) => {
    return {type: ADD_POST,  post}
}


export const profilePostReducer = (state = defaultInitial, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    post: action.post,
                }],
            }
        case GET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case GET_STATUS: return {
            ...state,
            status: action.status
        }
        case SET_STATUS: return {
            ...state,
            status: action.status
        }
        default:
            return {...state}
    }

}

