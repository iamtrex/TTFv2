export default function reducer(state={
    expenses: [],
}, action){
    //Modify state...
    switch(action.type){
        case "ADD_EXPENSE":
            state = {...state, income: state.income.concat(action.payload)};
            break;
        case "DEL_EXPENSE":
            state = {...state, expenses: state.expenses.filter(exp => exp.id !== action.id)};
            break;
        default:
            break;
    }

    return state;
};
