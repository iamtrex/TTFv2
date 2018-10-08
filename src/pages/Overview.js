import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

import {connect} from "react-redux";
import {addIncome} from "../actions/incomeActions";
import {Link} from "react-router-dom";


class Overview extends Component {
    render(){
        return(
            <div>
                <button>
                    <Link to={"/start"}>Start Button</Link>
                </button>
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

