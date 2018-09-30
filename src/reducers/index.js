import {combineReducers} from "redux"

import income from "./incomeReducer"
import expense from "./expenseReducer"

export default combineReducers({
    income,
    expense
})