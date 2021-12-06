import Description from "./components/Description";
import DescriptionTwo from "./components/DescriptionTwo";

const App = () => {
  // console.log(Description)
  return (
    <div className="App">
      <Description heading={'Mercedes S-Class'} />
      {/* <DescriptionTwo /> */}
      {/* <Description admin={true} /> */}
    </div>
  );
};

export default App;
