import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunk,
    getUserStatusThunk, setStatusThunk,
} from "../../Redux/profile-post-reducer";
import {withRouter} from "react-router-dom";
import {authCheckHoc} from "../hoc/authCheck";
import {compose} from "redux";


class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        postText: state.profileReducer.postText,
        profile: state.profileReducer.profile,
        logginedId: state.auth.id,
        status: state.profileReducer.status

    }

}



export default compose(
    authCheckHoc,
    withRouter,
    connect(mapStateToProps, {getUserProfileThunk, getUserStatusThunk, setStatusThunk})
)(ProfileAPI)