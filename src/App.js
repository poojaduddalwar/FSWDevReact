import Navbar from "./Navbar";


function App() {
  const pic = "Minion photo"

  // const styles = {
  //   width:'100px',
  //   border:'10px solid red'
  // }

  //Dynamic addition of style
  let styles
  if (pic === "Paris") {
    styles = {
      width: "600px",
      border: "10px solid red"
    }
  }
  else{
    styles = {
      width: "600px",
      border: "10px solid black"
    }
  }

  const handler =()=>{
    console.log("i was clicked")
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="container">
        <h3>{pic}</h3>

        {/* adiing inline styling */}
        {/* <img style={{width:'500px' , border:'10px solid red '}} src="https://images.pexels.com/photos/1606655/pexels-photo-1606655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" /> */}

        {/* explicit about inline styling */}
        <img style={styles} src="https://images.pexels.com/photos/1606655/pexels-photo-1606655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />

        <button onMouseMove={handler}>CLICK ME!</button>
        {/* <button onClick={handler}>CLICK ME!</button>  */}
        {/* <button onDoubleClick={handler}>CLICK ME!</button>  */}

      </div>

      <a href="#">Github</a>
      <a href="#">Youtube</a>
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
      <a href="#">LinkedIn</a>
    </div>
  );
}

export default App;