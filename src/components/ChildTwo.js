import ChildThree from "./ChildThree";

const ChildTwo = ({ data }) => {
    console.log("log from child two ")
    console.log(data)
    return (
        <div>
            <h3>I'm child two</h3>
            <ChildThree data={data} />
        </div>
    );
}

export default ChildTwo;