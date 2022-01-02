const Enhancer = (Component) => {
    return (props) => {
        console.log(props)
        return (
            <div>
                <Component {...props} />
                <h6><sub>Property of Mercedes Benz</sub></h6>
            </div>
        );
    }
}

export default Enhancer;