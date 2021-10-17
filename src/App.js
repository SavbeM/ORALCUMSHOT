import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {

    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Header/>
                <Nav/>
                <Route exact path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/profile'}
                       render={() => <Profile />}/>
            </BrowserRouter>
        </div>)
}


export default App
