import React from "react";
import {UsersFunc} from "./UsersFunc";
import {authCheckHoc} from "../hoc/authCheck";




export class UsersPageAPI extends React.Component {


    componentDidMount() {
         this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }


    render() {


        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        const pagination = pages.map((p) => <span onClick={() => this.onPageChange(p)}
                                                  style={this.props.currentPage === p ? {fontWeight: "bold"} : {fontWeight: "300"}}>{p}</span>)
        const  AuthRedirectComponent = authCheckHoc(UsersFunc)

        return (

            <>

                    <AuthRedirectComponent userFollowingInProgres={this.props.userFollowingInProgres}  follow={this.props.follow} unfollow={this.props.unfollow} users={this.props.users}
                               pagination={pagination}/>}
            </>
        )
    }
}
