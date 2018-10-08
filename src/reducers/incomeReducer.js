export default function reducer(state={
    income: [],
    showAdd: false,

}, action){
    //Modify state...
    switch(action.type){
        case "ADD_INCOME":
            const incomeObj = action.payload;
            incomeObj.id = Math.floor(Math.random() * 100000000); //Generate random id.

            state = {...state, income: state.income.concat(action.payload)}; //Remove show add after adding income
            break;
        case "SHOW_HIDE_INCOME":
            state = {...state, showAdd: action.payload.show};
            break;
        default:
            break;
    }

    return state;
};
