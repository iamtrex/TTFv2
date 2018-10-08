import React, {Component} from 'react';
import PropTypes from 'prop-types'

import '../style.css';

class AddForm extends Component {

    IN_YEAR = {
        "year": 1,
        "month": 12,
        "week": 52,
        "day": 365
    };

    constructor() {
        super();

        this.state = {
            rate: "year",
            showFreq2: false,
            showFreq3: false,
            showFreq4: false,
            freqRatio: 1,
            salary: 0
        };
    }

    //Handles when input parmas are changed, thus changing salary.
    handleSalaryChange(e) {

        let sal = document.getElementById("salary-field").value;

        /*
        if (this.state.showFreq2) {
            let multiplier = this.IN_YEAR[document.getElementById("frequency_rate").value];
            sal = document.getElementById("salary").value * document.getElementById("frequency").value * multiplier;
        } else {
            let multiplier = this.IN_YEAR[document.getElementById("salary_rate").value];
            sal = document.getElementById("salary").value * multiplier;

        }*/


        this.setState((prevState) => ({
            rate: prevState.rate,
            showFreq: prevState.showFreq,
            salary: sal
        }));

    }

    handleChangeRate(e) {
        let val = e.target.value;
        let show = !(val === 'year' || val === 'month');

        this.setState((prevState) => ({
            rate: val,
            showFreq: show,
            salary: prevState.salary
        }), () => this.handleSalaryChange(e)); //Use callback to ensure showFreq is updated. changed.
    }

    handleSubmit(e) {

        const baseRate = document.getElementById("base-rate-field").value;
        const freqRatio = this.state.freqRatio;
        const name = document.getElementById("name-field").value;
        if (baseRate == null || isNaN(baseRate) || baseRate === "" ||
            freqRatio == null || isNaN(freqRatio) || freqRatio === "" || name === ""){
            console.log("NEED TO USE A NUMBER");

            e.preventDefault();
            return;
        }

        let elt = {
            type:'active',
            name: name,
            amount: baseRate * freqRatio //Fill these in with form results.
        };

        this.props.addIncome(elt);
        this.props.showHideIncome(false);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>

                        <div className={"basic-div"}>
                            <div className={"inline-div title"}>Name</div>
                            <div className={"inline-div"}>
                                <input type={"text"} id={"name-field"}/>
                            </div>
                        </div>

                        <div className={"basic-div"}>
                            <div className={"inline-div title"}>Base Rate</div>
                            <div className={"inline-div"}><input id={"salary-field"}/></div>
                            <div className={"inline-div title"}>per</div>
                            <div className={"inline-div"}>
                                <select onChange={this.handleSalaryChange.bind(this)} id={"freq-1"}>
                                    <option value={"hour"}>Hour</option>
                                    <option value={"day"}>Day</option>
                                    <option value={"week"}>Week</option>
                                    <option value={"month"}>Month</option>
                                    <option value={"year"}>Year</option>
                                </select>
                            </div>
                        </div>

                        <div className={"basic-div"}>
                            {this.state.showFreq2 ?
                                <div className={"basic-div"}>
                                    <div className={"inline-div"}>
                                        <input type={"text"} id={"pay-freq1-field"} onChange={this.handleSalaryChange.bind(this)}/>
                                    </div>
                                    <div className={"inline-div"}>
                                        <select onChange={this.handleSalaryChange.bind(this)} id={"freq-1"}>
                                            <option value={"hour"}>Hour</option>
                                            <option value={"day"}>Day</option>
                                            <option value={"week"}>Week</option>
                                            <option value={"month"}>Month</option>
                                            <option value={"year"}>Year</option>
                                        </select>
                                    </div>
                                </div> : null}
                          {this.state.showFreq3 ?
                                <div className={"basic-div"}>
                                    <div className={"inline-div"}>
                                        <input type={"text"} id={"pay-freq1-field"} onChange={this.handleSalaryChange.bind(this)}/>
                                    </div>
                                    <div className={"inline-div"}>
                                        <select onChange={this.handleSalaryChange.bind(this)} id={"freq-1"}>
                                            <option value={"hour"}>Hour</option>
                                            <option value={"day"}>Day</option>
                                            <option value={"week"}>Week</option>
                                            <option value={"month"}>Month</option>
                                            <option value={"year"}>Year</option>
                                        </select>
                                    </div>
                                </div> : null}
                        </div>


                        <input type={"submit"} value="Submit"/>
                    </form>
                </div>

            </div>
        );
    }
}

AddForm.propTypes = {
    addIncome: PropTypes.func.isRequired,
    showHideIncome: PropTypes.func.isRequired
};


export default AddForm;
