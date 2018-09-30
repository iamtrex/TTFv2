
export function addIncome(amount){

    return{
        type: "ADD_INCOME",
        payload:{
            name: "Salaryx",
            amount: amount
        }
    }
}

//Export a function for each action...