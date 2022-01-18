import {followDelete, followPost, getUsersRequest} from "../api";


let defaultInitial = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    isFetching: false,
    buttonWillDisable: false,
    userFollowingInProgres: [],
}


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const DISABLE_BUTTON = "DISABLE_BUTTON"


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        getUsersRequest(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching(false))
            dispatch(setTotalUserCount((data.totalCount > 200) ? 200 : data.totalCount))
        });
    }
}


export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(disableButton(true, id))
        followDelete(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(id))
                dispatch(disableButton(false, id))
            }
        });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(disableButton(true, id))
        followPost(id).then(data => {
            if (data.resultCode === 0) {
               dispatch(followSuccess(id))
                dispatch(disableButton(false, id))}
            })
        }
    }

        export let disableButton = (buttonStatus, id) => {
            return {
                type: DISABLE_BUTTON, buttonStatus, id
            }
        }

        export let setUsers = (users) => {
            return {
                type: SET_USERS, users: users
            }
        }

        export let toggleIsFetching = (isFetching) => {
            return {
                type: TOGGLE_IS_FETCHING, isFetching
            }
        }

        export let setTotalUserCount = (count) => {
            return {
                type: SET_TOTAL_USER_COUNT, count
            }
        }

        export let setCurrentPage = (current) => {
            return {
                type: SET_CURRENT_PAGE, current
            }
        }

        export let followSuccess = (id) => {
            return {
                type: FOLLOW, id: id,
            }
        }

        export let unFollowSuccess = (id) => {
            return {
                type: UNFOLLOW, id: id,
            }
        }
        export let usersPageReducer = (state = defaultInitial, action) => {
            switch (action.type) {
                case FOLLOW:
                    return {
                        ...state,
                        users: state.users.map((u) => {
                            if (action.id === u.id) {
                                u.followed = true
                            }
                            return u
                        })
                    }
                case UNFOLLOW:
                    return {
                        ...state,
                        users: state.users.map((u) => {
                            if (action.id === u.id) {
                                u.followed = false
                            }
                            return u
                        })
                    }
                case SET_USERS:
                    return {
                        ...state,
                        users: [...action.users]
                    }

                case  SET_CURRENT_PAGE:
                    return {
                        ...state,
                        currentPage: action.current
                    }
                case SET_TOTAL_USER_COUNT:
                    return {
                        ...state,
                        totalUsersCount: action.count
                    }

                case TOGGLE_IS_FETCHING:
                    return {
                        ...state,
                        isFetching: action.isFetching
                    }
                case DISABLE_BUTTON:
                    return {
                        ...state,
                        buttonWillDisable: action.buttonStatus,
                        userFollowingInProgres: action.buttonStatus === true ? [...state.userFollowingInProgres, action.id] : state.userFollowingInProgres.filter(id => id !== action.id)
                    }
                default:
                    return {...state}
            }
        }