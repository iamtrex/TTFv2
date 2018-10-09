import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

import {connect} from 'react-redux';
import {addIncome, showHideAddIncome, changeIncomeType} from '../actions/incomeActions';
import {Link} from "react-router-dom";

import ActiveAddForm from '../components/ActiveAddForm';
import PassiveAddForm from '../components/PassiveAddForm';


class Income extends Component {

    handleShowIncomeClicked() {
        this.props.showHideIncome(!this.props.income.showAdd);
    }

    handleAddIncomeTypeChanged() {
        this.props.changeIncomeType(document.getElementById("income-type-select").value);
    }


    render() {

        const mappedIncome = this.props.income.income.map(i => {
            let growthTag = i.growth;

            growthTag = i.growthType === "percent" ? growthTag + "%" : "$" + growthTag;

            return <li key={i.id}>
                {i.name} Current Annual ${i.annualSalary} with {growthTag} Annual Growth</li>
        });


        let toAdd = null;
        console.log(this.props.income.addType);
        if (this.props.income.showAdd && this.props.income.addType != null) {

            switch (this.props.income.addType) {
                case "active":
                    toAdd =
                        <ActiveAddForm addIncome={this.props.addIncome} showHideIncome={this.props.showHideIncome}/>;
                    break;
                case "passive":
                    toAdd =
                        <PassiveAddForm addIncome={this.props.addIncome} showHideIncome={this.props.showHideIncome}/>;
                    break;
                default:
                    console.log("wTF");

            }
        }


        return <div className={"flex-div"}>
            <h1>Income</h1>
            <ul>
                {mappedIncome}
            </ul>
            {this.props.income.showAdd ? null :
                <button onClick={this.handleShowIncomeClicked.bind(this)}>Add New Income</button>}

            {this.props.income.showAdd ?
                <div>
                    <div>
                        <div className={"inline-div title"}>Choose Income Type</div>
                        <div className={"inline-div"}>
                            <select id={"income-type-select"} onChange={this.handleAddIncomeTypeChanged.bind(this)}
                                    defaultValue={"blank"}>
                                <option value={"blank"}/>
                                <option value={"active"}>Active</option>
                                <option value={"passive"}>Passive</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {this.props.income.addType != null ? toAdd : null}
                    </div>
                </div>
                : null}


        </div>
    }

}


const mapStateToProps = state => ({
    income: state.income,
    showAdd: state.showAdd,
    addType: state.addType,
});

const mapDispatchToProps = dispatch => ({
    addIncome: amount => dispatch(addIncome(amount)),
    showHideIncome: bool => dispatch(showHideAddIncome(bool)),
    changeIncomeType: type => dispatch(changeIncomeType(type)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Income)
