import { useParams } from "react-router-dom";
//we can access the url parameters in this component using this useParams function
import { useSelector } from "react-redux";

const Details = () => {
    // console.log(useParams())
    const { name } = useParams()
    const products = useSelector(state => state)
    const product = products.find(product => product.name === name)
    console.log(product)
    return (
        <div>
            <h2>{name} Details</h2>
            {product.description}
        </div>
    );
}

export default Details;