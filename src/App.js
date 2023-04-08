// import logo from "./logo.svg";
// import "./App.css";
// import Greeting from "./components/Greeting";
// import Greeting from "./components/Greeting/Greeting";
// import PersonCard from "./components/Cards/PersonCard";
import MojaKartica from "./components/mojRad/MojaKartica";

// function App() {
// return (
//     <>
//       <div className="App">
//         {/* <header className="header">
//           <img src="https://duomly.nyc3.digitaloceanspaces.com/articles/coding/alps-lake.jpg" />
//           <h1 style={{ color: "green" }}>Prvi radovi u React Project</h1>
//         </header> */}
//         {/* <Greeting appName={"MyFirstAppReact"} username={"."} /> */}
//         <PersonCard />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <>
      <div
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(4,250px)",
          gridGap: "100px",
          // gridAutoRows: "minmax(420px,auto)",
          justifyContent: "center",
        }}
      >
        <MojaKartica imgUrl />
        <MojaKartica />
        <MojaKartica />
        <MojaKartica />
        <MojaKartica />
        <MojaKartica />
        <MojaKartica />
        <MojaKartica />
      </div>
    </>
  );
}

export default App;
