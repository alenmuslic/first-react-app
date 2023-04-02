// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <h1 style={{ color: "green" }}>
            🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
          </h1>
        </header>
        <Greeting appName={"my first app"} username={"Hatidza"} />
      </div>
    </>
  );
}

export default App;
