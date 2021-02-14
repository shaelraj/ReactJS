import "./App.css";
import Greet from "./Components/Greet";
import MyGreet from "./Components/MyGreet";
import Hello from "./Components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="shaelraj">
        <p>This is props</p>
      </Greet>
      <Greet name="shaelemor" />
      <Greet name="parizval" />

      <MyGreet name="shaelraj" />
      <MyGreet name="shaelemor" />
      <MyGreet name="parizval" />
      <Hello />
    </div>
  );
}

export default App;
