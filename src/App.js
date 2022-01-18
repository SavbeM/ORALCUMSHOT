import React from 'react';
import './App.css';
import {UserPageContainer} from "./components/Users/UsersPageContainer";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileAPI.jsx";
import HeaderContainer from "./components/Header/HeaderContainer";
import {NavContainer} from "./components/Nav/Nav";
import LoginContainer from "./components/Login/Login";
import {connect} from "react-redux";
import {initializing} from "./Redux/app-reducer";
import {compose} from "redux";
import preloader from "./assets/preloader.gif"

export class App extends React.Component {
    componentDidMount() {
        this.props.initializing()
    }

    render() {
    if(!this.props.isInitialized){return <img src={preloader}/>}
       else return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavContainer/>
                <Route exact path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId'}
                       render={() => <ProfileContainer/>}/>
                <Route path={'/users'}
                       render={() => <UserPageContainer/>}/>
                <Route path={'/login'}
                       render={() => <LoginContainer/>}/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializing})
)(App)

