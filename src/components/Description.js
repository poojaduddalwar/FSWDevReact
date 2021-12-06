import Enhancer from "../HOC/Enhancer";

const Description = ({ heading }) => {
    // console.log(Enhancer)
    return (
        <div>
            <h1>{heading}</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad ipsam officia animi est omnis quibusdam minus? Delectus, nam voluptates! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, voluptate!</div>
        </div>
    );
}

export default Enhancer(Description);