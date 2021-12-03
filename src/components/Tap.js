import { useEffect, useState } from "react";

const Tap = () => {


    useEffect(() => {
        const alert = () => window.alert("HEY !! you just double clicked")
        document.addEventListener('dblclick', alert)
        return () => document.removeEventListener('dblclick', alert)

        //FOR EXAMPLE
        // console.log("component mounted")
        // return () => console.log("component un-mounted")
    }, [])

    //so whatever this useEffect returns in this case a function so it is going to be called when the component un-mounts

    // The dblclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.

    const [count, setcount] = useState(0)

    // setcount(prev => prev + 1)

    return (
        <div className="container">
            <div className="tap">
                <h3>{count}</h3>
                <button onClick={() => { setcount(prev => prev += 1) }}>Click</button>
                <h2>Tap</h2>
            </div>
        </div>
    );
}

export default Tap;