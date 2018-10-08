import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

import {connect} from 'react-redux';
import {addIncome, showHideAddIncome} from '../actions/incomeActions';
import {Link} from "react-router-dom";

import AddForm from '../components/AddForm';


class Income extends Component {
    componentWillMount(){

    }


    handleShowIncomeClicked(){
        this.props.showHideIncome(!this.props.income.showAdd);
    }

    render(){

        const mappedIncome = this.props.income.income.map(i =>
        {
            let growthTag = i.growth;

            growthTag = i.growthType === "percent" ? growthTag + "%" : "$" + growthTag;

            return <li key={i.id}>
                        {i.name} Current Annual ${i.annualSalary} with {growthTag} Annual Growth</li>
        });


        return(
            <div className={"flex-div"}>
                <h1>Income</h1>
                <ul>
                    {mappedIncome}
                </ul>
                <button onClick={this.handleShowIncomeClicked.bind(this)}>Add New Income</button>
                {this.props.income.showAdd ? <AddForm addIncome={this.props.addIncome} showHideIncome={this.props.showHideIncome}/> : null}


            </div>
        )
    }

}


const mapStateToProps = state =>({
    income: state.income,
    showAdd: state.showAdd,
});

const mapDispatchToProps = dispatch =>({
    addIncome: amount => dispatch(addIncome(amount)),
    showHideIncome: bool => dispatch(showHideAddIncome(bool)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Income)
