import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import {connect} from "react-redux";
import {addIncome} from "../actions/incomeActions";


class Overview extends Component {
    render(){
        return(
            <div>
                <div>This is overview page</div>
                <a href={"/start"}>Go to Start</a>

            </div>
        )
    }
}


const mapStateToProps = state =>({
    income: state.income
});

const mapDispatchToProps = dispatch =>({
    addIncome: amount => dispatch(addIncome(amount)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Overview)

