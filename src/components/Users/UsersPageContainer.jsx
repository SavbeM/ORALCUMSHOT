import React from "react";
import {UsersPageAPI} from "./UsersPageAPI";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
     getUsersThunkCreator, unfollow
} from "../../Redux/users-page-reducer";
import {
    getButtonWillDisable,
    getCurrentPage, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUserFollowingInProgres,
    getUsers
} from "../../Redux/users-selectors";


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        buttonWillDisable: getButtonWillDisable(state),
        userFollowingInProgres: getUserFollowingInProgres(state),
        isAuth: getIsAuth(state)
    }
}


export const UserPageContainer = connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, getUsersThunkCreator,
})(UsersPageAPI)