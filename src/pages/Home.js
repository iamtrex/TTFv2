import React, { Component } from 'react';

import{
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import './Home.css';

import Start from './Start';
import Overview from './Overview';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header>
                    <h1>This is a header...</h1>
                </header>
                <div className="SomeText">
                    Hello World
                </div>
                <Router>
                    <div id={"Content"}>
                        <Route exact path={"/"} component={Start}/>
                        <Route path={"/start"} component={Start}/>
                        <Route path={"/overview"} component={Overview}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Home;
