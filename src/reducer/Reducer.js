const initstate = [{ password: 'something' }, { password: 'anything' }, { password: 'nothing' }]

const reducer = (state = initstate, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer;


//when you initialize a reducer it expects you to provide the initial value of state and the action