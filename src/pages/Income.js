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

    handleAddIncomeClicked(){
        this.props.addIncome(document.getElementById("salary-value").value);
        this.props.showHideIncome(false);
    }


    handleShowIncomeClicked(){
        this.props.showHideIncome(!this.props.income.showAdd);
    }

    render(){

        const mappedIncome = this.props.income.income.map(i =>
            <li key={i.id}>
                {i.name} ${i.amount}
            </li>);

        return(
            <div>
                <div>This is start page</div>
                <a href={"/overview"}>Go to Overview</a>
                <br/>
                <button onClick={()=>{window.location.href="/overview"}}>Go to Overview</button>
                <br/>
                <Link to={"/overview"}>Overview</Link>
                <hr/>
                <ul>
                    {mappedIncome}
                </ul>
                <hr/>
                <button onClick={this.handleShowIncomeClicked.bind(this)}>Show Add Dia</button>
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
