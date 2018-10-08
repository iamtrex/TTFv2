import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

import {connect} from 'react-redux';
import {addIncome} from '../actions/incomeActions';
import {Link} from "react-router-dom";



class Start extends Component {
    componentWillMount(){

    }

    handleAddIncomeClicked(){
        this.props.addIncome(document.getElementById("salary-value").value);
        console.log("Need to add Income");
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
                <Link to={"/income"}>Income</Link>
                <hr/>
                <ul>
                    {mappedIncome}
                </ul>
                <hr/>
                <input type={"text"} id={"salary-value"}/>
                <button onClick={this.handleAddIncomeClicked.bind(this)}>Add Income</button>
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
)(Start)
