
export function addIncome(amount){

    return{
        type: "ADD_INCOME",
        payload: amount,
    }
}

export function showHideAddIncome(bool){
    return{
        type: "SHOW_HIDE_INCOME",
        payload:{
            show: bool,
        }
    }
}

export function changeIncomeType(type){
    return{
        type: "CHANGE_INCOME_TYPE",
        payload:{
            type: type,
        }
    }
}

//Export a function for each action...