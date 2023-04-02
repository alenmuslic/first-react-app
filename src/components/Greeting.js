import React from "react";
import "./Greeting.css";
// import Greeting from "./components/Greeting/Greeting";

// function Greeting() {
//     return (
//         <main className="main">
//         <h2>Dobrodosli u nasu aplikaciju</h2>
//         <h3>Hvala sto ste nas posetili,Hatidza🐸</h3>
//       </main>
//     )
// }
// export default Greeting;

function Greeting(props) {
  console.log(props);
  console.log(props.appName);
  return (
    <main className="main">
      <h2>Dobrodosli u {props.appName}</h2>
      <h3>Hvala s to ste nas posetili {props.username}</h3>
    </main>
  );
}
export default Greeting;
