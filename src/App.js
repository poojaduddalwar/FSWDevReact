import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Content from "./components/Content";

function App() {
  return (
    // in jsx we can inject a variable as well as expressions
//in jsx to use a variable we need curly brackets {variableName}

    <div className="App">
      <Navbar />

      <Content />

      {/* <div className="container">
        <ul> */}
          {/* <li>One</li>
          <li>Two</li>
          <li>Three</li> */}
           {/* using foreach u can't return something or u can't use this return keyword or a return syntax */}
          {/* {
            chores.forEach(chore => <li>{chore}</li>)
          } */}
          {/* map is similar to foreach but with map you can return something */}
          {/* {
            chores.map(chore => <li>{chore}</li>)
          }
        </ul>
         </div> */}

         <Footer />
    </div>
  );
}

export default App;