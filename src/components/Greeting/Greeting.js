import React from "react";
import "./Greeting.css";
function Greeting(props) {
  console.log(props.username);
  console.log(props.appName);
  return (
    <main className="main">
      <h2>Dobrodosli u {props.appName}</h2>
      <h3>Hvala sto ste nas posetili {props.username}</h3>
    </main>
  );
}

export default Greeting;
