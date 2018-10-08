import React, { Component } from 'react';

import{
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Start from './Start';
import Overview from './Overview';
import Income from './Income';


class Home extends Component {
    render() {
        return (
            <div className="root">
                <div className={"header"}>
                    <h1>This is a header...</h1>
                </div>
                <div className={"content flex-container spanning-div"}>
                    <div className={"left-button-div flex-div-nogrow"}>
                        <button>Prev</button>
                    </div>
                    <div className={"left-button-div flex-div-grow"}>
                        <Router>
                            <div className={"router-div"}>
                                <Route exact path={"/"} component={Start}/>
                                <Route path={"/start"} component={Start}/>
                                <Route path={"/overview"} component={Overview}/>
                                <Route path={"/income"} component={Income}/>
                            </div>
                        </Router>
                    </div>
                    <div className={"right-button-div flex-div-nogrow"}>
                        <button className={"full-height-button"}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
