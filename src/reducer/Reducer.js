
const reducer = (state = {}, action) => {
    const { type, payload } = action

    //payload is just the data which you want to add or remove from the state

    switch (type) {
        case "ADD_PRODUCT":
            // console.log(action)
            const { products } = state
            return { ...state, products: [...products, payload] }
        default:
            return state
    }
}

export default reducer;


// we can't push to the state because states are immutable
//whatever the reducer return is the new value of the state . 
