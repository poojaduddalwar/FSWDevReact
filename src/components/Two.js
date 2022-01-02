import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Two = () => {
    const [product, setproduct] = useState('')
    // const state = useSelector(state => state.categories)

    //useSelector hook allows you to select what you want from from the global store.

    const dispatch = useDispatch()

    //useDispatch is a hook which gives access to a function  which is called dispatch 
    //we can't directly pass action to the reducer ,it has to go through this dispatch function 
    //we use this dispatch function to dispatch the action to the reducer .
    //and because of this dispatch we are able to trigger a state change.

    const handleSubmit = () => {
        // console.log(product)


        //action is a pure js object that you pass along to the reducer to tell reducer 
        const action = {
            type: "ADD_PRODUCT",
            payload: product
        }
        // console.log(action)
        dispatch(action)
    }

    return (
        <div>
            <input onChange={(e) => (setproduct(e.target.value))} type="text" />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default Two;