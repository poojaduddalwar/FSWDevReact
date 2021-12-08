
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_DATA':   //here ADD_DATA is the action
            //this action returns new array which contain all data in the previous state and the new data 
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer;


//when you initialize a reducer it expects you to provide the initial value of state and the action