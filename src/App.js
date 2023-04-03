// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          {/* <img src="https://duomly.nyc3.digitaloceanspaces.com/articles/coding/alps-lake.jpg" /> */}
          <h1 style={{ color: "green" }}>Prvi radovi u React Project</h1>
        </header>
        <Greeting appName={"MyFirstAppReact"} username={"."} />
      </div>
    </>
  );
}

export default App;
