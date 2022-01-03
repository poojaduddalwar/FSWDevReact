
const reducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case "DELETE_ITEM":
            return state.filter(item => item.id != payload)

        case "ADD_ITEM":
            return [...state, payload]

        default:
            return state
    }
}

export default reducer;

//as soon as the central state changes it remaped over the values or re-renders
//a state change in redux also triggers a re-render like it does in react using the useState hook  