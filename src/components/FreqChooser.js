import React, {Component} from 'react';
import Select from 'react-select';

import PropTypes from 'prop-types'

import '../style.css';

class FreqChooser extends Component {
    FREQ_ARR = ["hour", "day", "week", "month", "year"];

    translateOptionValue(value) {
        return value.charAt(0).toUpperCase() + value.substr(1) + "s";
    }


    render(){
        const fieldID = "freq-" + this.props.num + "-field";
        const selectID = "freq-" + this.props.num;
        const prevSelNum = this.FREQ_ARR.indexOf(this.props.prevSelect);

        return (
            <div className={"basic-div"}>
                <div className={"inline-div"}>
                    <input type={"text"} id={fieldID} onChange={this.props.handleSalaryChange} defaultValue={1}/>
                </div>

                <div className={"inline-div"}>{this.translateOptionValue(this.props.prevSelect)} per</div>
                <div className={"inline-div"}>
                    <select className={"select"} onChange={this.props.handleFreqPeriodChange} id={selectID} defaultValue={"year"}>
                        {prevSelNum < this.FREQ_ARR.indexOf("hour") ? <option value={"hour"}>Hour</option> : null}
                        {prevSelNum < this.FREQ_ARR.indexOf("day") ? <option value={"day"}>Day</option> : null}
                        {prevSelNum < this.FREQ_ARR.indexOf("week") ? <option value={"week"}>Week</option> : null}
                        {prevSelNum < this.FREQ_ARR.indexOf("month") ? <option value={"month"}>Month</option> : null}
                        {prevSelNum < this.FREQ_ARR.indexOf("year") ? <option value={"year"}>Year</option> : null}
                    </select>
                </div>
            </div>
        )
    }
}
FreqChooser.propTypes = {
    handleSalaryChange: PropTypes.func.isRequired,
    handleOptionsChange: PropTypes.func.isRequired,
    handleFreqPeriodChange: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired,
    prevSelect: PropTypes.string.isRequired,
};

export default FreqChooser;
