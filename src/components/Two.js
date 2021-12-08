import { useSelector } from "react-redux";
//this useSelector hook gives access to the central state (store)
//it accepts a function and return the value of state
//it is just a hook which allows you to select what u want from your store
import { useState } from "react";

const Two = () => {
    const [product, setproduct] = useState('')
    const state = useSelector(state => state.categories)
    // console.log(state)
    const handleSubmit = () => {
        console.log(product)
    }
    return (
        <div>
            <input onChange={(e) => (setproduct(e.target.value))} type="text" />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default Two;