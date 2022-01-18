export let getUsers = (state) => {
    return state.usersReducer.users
}

export let getTotalUsersCount = (state) => {
    return state.usersReducer.totalUsersCount
}
export let getPageSize = (state) => {
    return state.usersReducer.pageSize
}

export let getCurrentPage = (state) => {
    return state.usersReducer.currentPage
}

export let getIsFetching = (state) => {
    return state.usersReducer.isFetching
}

export let getButtonWillDisable = (state) => {
    return state.usersReducer.buttonWillDisable
}

export let getUserFollowingInProgres = (state) => {
    return state.usersReducer.userFollowingInProgres
}

export let getIsAuth = (state) => {
    return state.auth.isAuth
}
