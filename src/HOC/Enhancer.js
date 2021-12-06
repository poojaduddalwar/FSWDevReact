const Enhancer = (Component) => {
    // return () => (
    //     <div>
    //         {/* <h3>I am an enhancer</h3> */}
    //         < Component />
    //         <h6><sub>Property of Mercedes Benz</sub></h6>
    //     </div>
    // )

    // but here in the above return we are returning 
    //a function which inturn return some jsx
    //because Description was the function that we were exporting, so we've to return a function here.

    // return (
    //     <div>
    //         <h3>I am an enhancer</h3>
    //         <Component />
    //     </div>
    // );

    //here in the above return we were just passing along some jsx



    return (props) => {
        console.log(props)
        return (
            <div>
                <Component {...props} />
                {/* <Component heading={props.heading} /> */}
                <h6><sub>Property of Mercedes Benz</sub></h6>
            </div>
        );
    }

    // return ({ admin }) => admin ? <Component /> : "Private"
}

export default Enhancer;