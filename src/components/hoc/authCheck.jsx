import {Component} from "react";
import * as React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";


export const  authCheckHoc = (Component) => {
     class RedirectComponent extends React.Component {
         render() {
             if (this.props.isAuth === false){return <Redirect to={"/login"}/>}
          return <Component {...this.props}/>
         }

     }
     const mapStateToProps = (state) => {
         return {
             isAuth: state.auth.isAuth
         }
     }
     let  ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
     return ConnectAuthRedirectComponent
}

