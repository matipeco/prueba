import "./App.css";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Fade cascade>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Fade>
    </div>
  );
}

export default App;
