import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
    return (<div className='app-wrapper'>
            <BrowserRouter>
               <Header />
                <Nav/>
                <Route exact path={'/dialogs'} render={() =><Dialogs messages={props.state.dialogsPage.dialogs} />}/>
                <Route path={'/profile'} render={() =><Profile dispatch={props.dispatch} ProfilePosts={props.state.profilePage.posts} />}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
