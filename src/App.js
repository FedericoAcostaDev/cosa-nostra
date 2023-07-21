import "./App.css";
import Title from "./Components/InfoComponents/Title/Title";
import Background from "./Components/Structure/Background";
import "./Components/Structure/Background.css";

function App() {
  return (
    //Components here there in line according to Z index from top to bottom
    <>
      <Title />
      <Background />
    </>
  );
}

export default App;
