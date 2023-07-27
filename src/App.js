import "./App.css";
import Dates from "./Components/InfoComponents/Dates/Date";
import Title from "./Components/InfoComponents/Title/Title";
import Background from "./Components/Structure/Background";
import "./Components/Structure/Background.css";

function App() {
  return (
    //Components here there in line according to Z index from top to bottom
    <>
      <Title />
      <Dates />
      <Background />
    </>
  );
}

export default App;
