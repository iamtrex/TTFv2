
export function addIncome(amount){

    return{
        type: "ADD_INCOME",
        payload:{
            name: "Salaryx",
            amount: amount
        }
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

//Export a function for each action...