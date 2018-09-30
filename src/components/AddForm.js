import React, { Component } from 'react';
import PropTypes from 'prop-types'


class AddForm extends Component {

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
        /*
        let elt = {
            type:'active',
            name:'',
            amount:0 //Fill these in with form results.
        };

        this.props.addIncome(elt);*/
        const val = document.getElementById("salary").value;
        if(val != null && !isNaN(val) && val !== ""){
            this.props.addIncome(document.getElementById("salary").value);
        }else{
            console.log("NEED TO USE A NUMBER");
        }

        e.preventDefault();
    }

    render() {
        return(
            <div>
                <span><h3>Salary: <input id={"salary"}/></h3></span>
                <button onClick={this.handleSubmit.bind(this)}>Add</button>
            </div>
        );
    }
}

AddForm.propTypes={
    addIncome: PropTypes.func.isRequired,
};


export default AddForm;
