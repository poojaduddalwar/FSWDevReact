import ChildTwo from "./ChildTwo";

const ChildOne = ({ data }) => {
    console.log("log from child one ")
    console.log(data)
    return (
        <div>
            <h2>I'm child one</h2>
            <ChildTwo data={data} />
        </div>
    );
}

export default ChildOne;