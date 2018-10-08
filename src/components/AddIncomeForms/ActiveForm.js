import React, { Component } from 'react';

import Title from "../Title";

class ActiveForm extends Component {

    IN_YEAR = {
        "year":1,
        "month":12,
        "week":52,
        "day":365
    };

    constructor() {
        super();

        this.state = {
            rate: "year",
            showFreq: false,
            salary: 0
        };
    }
    //Handles when input parmas are changed, thus changing salary.
    handleSalaryChange(e){

        let sal = 0;

        if(this.state.showFreq) {
            let multiplier = this.IN_YEAR[document.getElementById("frequency_rate").value];
            sal = document.getElementById("salary").value * document.getElementById("frequency").value * multiplier;
        }else{
            let multiplier = this.IN_YEAR[document.getElementById("salary_rate").value];
            sal = document.getElementById("salary").value * multiplier;

        }
        console.log(sal);

        this.setState((prevState)=>({
            rate: prevState.rate,
            showFreq: prevState.showFreq,
            salary: sal
        }));
    }

    handleChangeRate(e){
        let val = e.target.value;
        let show = !(val === 'year' || val === 'month');

        this.setState((prevState)=>({
            rate:val,
            showFreq:show,
            salary: prevState.salary
        }), ()=>this.handleSalaryChange(e)); //Use callback to ensure showFreq is updated. changed.

    }

    handleSubmit(e){
        let elt = {
            type:'active',
            name:'',
            amount:0 //Fill these in with form results.
        };

        this.props.addIncome(elt);
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <div className={"spanning-div"}>Active Income</div>
                Salary Rate: $ <input onChange={this.handleSalaryChange.bind(this)} id="salary" type={"number"}></input>
                <p> per </p>
                <select id={"salary_rate"} onChange={this.handleChangeRate.bind(this)}>
                    <option selected value={"year"}>Year</option>
                    <option value={"month"}>Month</option>
                    <option value={"week"}>Week</option>
                    <option value={"day"}>Day</option>
                    <option value={"hour"}>Hour</option>
                </select>
                <br/>

                {this.state.showFreq ?
                    <div>
                        Frequency: <input onChange={this.handleSalaryChange.bind(this)} id="frequency" type={"number"}></input> {this.state.rate}s
                        <p> per </p>
                        <select onChange={this.handleSalaryChange.bind(this)} id={"frequency_rate"}>
                            <option selected value={"year"}>Year</option>
                            <option value={"month"}>Month</option>
                            <option value={"week"}>Week</option>
                            <option value={"day"}>Day</option>
                        </select>
                    </div> :
                    null
                }

                Yearly Salary = {this.state.salary}
            </div>
        );
    }
}

export default ActiveForm;
