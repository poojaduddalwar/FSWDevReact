import { useSelector } from "react-redux";
//this useSelector hook gives access to the central state (store)
//it accepts a function and return the value of state

const Two = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>
            <h2>I am component two</h2>
        </div>
    );
}

export default Two;