import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import {applyMiddleware, combineReducers, createStore} from "redux";
import './style.css';


//Reducer returns the new state... Reducer changes the state...
//Remember, never EVER modify the state object, always return a new state object :D

const userReducer = function(state={}, actions){
    if(actions.type === "CHANGE_NAME"){
        state = Object.assign({}, state, {name: actions.payload});
        // state = {...state, name: actions.payload};
    }
    return state;
};

const tweetsReducer = function(state=[], actions){
    return state;
};
const reducer = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
});

/*
const logger = (store) => (next) => (action) =>{
    console.log("Action fired!", action);

    //Can modify the action here...

    next(action); //Fire next... in this case the reducer...
};*/
const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer, {
    user:{
        name: "Will",
        age: 35,
    },
    tweets:[]
}, middleware);

store.subscribe(()=>{
    console.log("Store Changed! ", store.getState());
});

// We can call it anything, but we generally call it payload, and just make an object around it...
/** with redux logger
 store.dispatch({type: "CHANGE_NAME", payload: "John"});
 store.dispatch({type: "CHANGE_NAME", payload: "Mary"});
 store.dispatch({type: "INC", payload: 2});
 store.dispatch({type: "INC", payload: 3});
 store.dispatch({type: "DEC", payload: 2});
 */

store.dispatch((dispatch) => {
    dispatch({type: "foo"});
    //Do something async
    dispatch({type: "boo"});
});


class random_redux extends Component {
    render(){
        return(
            <div>
                <div>This is start page</div>
                <a href={"/overview"}>Go to Overview</a>


            </div>
        )
    }
}

export default random_redux;
