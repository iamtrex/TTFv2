export default function reducer(state={
    income: [{
        "name": "Salary",
        "amount": 35000,
    },],

}, action){
    //Modify state...
    switch(action.type){
        case "ADD_INCOME":
            console.log("Adding some income");
            state = {...state, income: state.income.concat(action.payload)};
            break;
        default:
            break;
    }

    return state;
};
