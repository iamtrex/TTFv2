import React, {Component} from 'react';
import PropTypes from 'prop-types'

import FreqChooser from './FreqChooser';


import '../style.css';

class PassiveAddForm extends Component {

    IN_YEAR = {
        "year": 1,
        "month": 12,
        "week": 52,
        "day": 365
    };

    constructor() {
        super();

        this.state = {
            showFreq2: false,
            showFreq3: false,
            showFreq4: false,
            salary: 0
        };
    }

    cancelIncome(){
        this.props.showHideIncome(false);
    }

    handleFreqPeriodChange() {
        console.log("SALARY CHANGED");
        let showFreq2 = false, showFreq3 = false, showFreq4 = false;

        const freq1 = document.getElementById("freq-1");
        const freq2 = document.getElementById("freq-2");
        const freq3 = document.getElementById("freq-3");
        const freq4 = document.getElementById("freq-4");

        if (freq1 != null && freq1.value !== "year") {
            showFreq2 = true;
            if (freq2 != null && freq2.value !== "year") {
                showFreq3 = true;
                if (freq3 != null && freq3.value !== "year") {
                    showFreq4 = true;
                }
            }
        }
        this.setState((prevState) => ({
            showFreq2: showFreq2,
            showFreq3: showFreq3,
            showFreq4: showFreq4
        }), this.handleSalaryChange());

    }

    //Handles when input parmas are changed, thus changing salary.
    handleSalaryChange() {
        const freq1 = document.getElementById("freq-1");
        const freq2 = document.getElementById("freq-2");
        const freq3 = document.getElementById("freq-3");
        const freq4 = document.getElementById("freq-4");

        let salary = 0;
        const freq1Ratio = document.getElementById("base-rate-field").value;
        if (freq1Ratio && !isNaN(freq1Ratio)) {
            console.log("freq1ratio is not null or nan");
            salary = freq1Ratio;

            if (freq1.value !== "year" && freq2 != null) {
                const freq2Ratio = document.getElementById("freq-2-field");
                if (freq2Ratio && !isNaN(freq2Ratio.value)) {
                    salary = salary * freq2Ratio.value;

                    if (freq2.value !== "year" && freq3 != null) {
                        const freq3Ratio = document.getElementById("freq-3-field");

                        if (freq3Ratio && !isNaN(freq3Ratio.value)) {
                            salary = salary * freq3Ratio.value;
                            if (freq3.value !== "year" && freq4 != null) {
                                const freq4Ratio = document.getElementById("freq-4-field");

                                if (freq4Ratio && !isNaN(freq4Ratio.value)) {
                                    salary = salary * freq4Ratio.value;
                                } else {
                                    salary = "";
                                }
                            }
                        } else {
                            salary = "";
                        }
                    }
                } else {
                    salary = "";
                }
            }
        } else {
            salary = "";
        }

        this.setState((prevState) => ({
            salary: salary
        }));
    }


    handleGrowthChange(e) {
        let growth = document.getElementById("growth-field").value;
        const growthType = document.getElementById("growth-type").value;

        if (!growth || isNaN(growth)) {
            growth = "";
        }
        this.setState((prevState) => ({
            growth: growth,
            growthType: growthType,
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("name-field").value;
        let salary = this.state.salary;
        let growth = this.state.growth;
        let growthType = this.state.growthType;

        //Input check.
        if (salary === "" || name === "" || growth === "")
            return;


        let elt = {
            type: 'active',
            name: name,
            annualSalary: salary,
            growth: growth,
            growthType: growthType
        };

        this.props.addIncome(elt);
        this.props.showHideIncome(false);
    }

    render() {
        return (
            <div className={"spanning-div"}>
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <div className={"basic-div"}>
                        <div className={"inline-div title"}>Name</div>
                        <div className={"inline-div"}>
                            <input type={"text"} id={"name-field"}/>
                        </div>
                    </div>

                    <div className={"inline-div"}>
                        <input type={"submit"} value="Submit"/>
                    </div>
                    <div className={"inline-div"}>
                        <button onClick={this.cancelIncome.bind(this)}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }

}

PassiveAddForm.propTypes = {
    addIncome: PropTypes.func.isRequired,
    showHideIncome: PropTypes.func.isRequired
};


export default PassiveAddForm;
