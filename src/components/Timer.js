const Timer = () => {

    // function onTimer() { setInterval(startTimer, 1000); }
    var onTimer = setInterval(startTimer, 1000)

    function startTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("time").innerHTML = t
    }

    // const offTimer = () => clearInterval(onTimer);
    // function myStopFunction() {
    //     clearInterval(onTimer);
    // }
    return (
        <div className="container">
            <div className="timer">
                <h2>Timer</h2>
                <p id="time"></p>
                {/* <button onClick={onTimer}>Start</button> */}
                <br />
                <button onClick={() => {
                    clearInterval(onTimer)
                    console.log("stop")
                }}>Stop</button>
            </div>
        </div>
    );
}

export default Timer;