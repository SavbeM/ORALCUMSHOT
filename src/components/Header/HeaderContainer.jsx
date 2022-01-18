import  React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authThunk, logoutThunk} from "../../Redux/auth-reducr";





class HeaderContainer extends React.Component {

    render() {
        return(
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps,{authThunk, logoutThunk
})(HeaderContainer);
