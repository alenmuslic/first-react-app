import React from "react";
import "./mojrad.css";
import { FaGithub } from "react-icons/fa";

export default function MojaKartica() {
  return (
    <div className="kartica">
      <div className="slikaIme">
        <img
          src={"https://avatars.githubusercontent.com/u/111905831?v=4"}
          className="slika"
        />
        <h1>Alen Muslic</h1>
        <h2>Novi Pazar,SERBIA</h2>
        {/* <h3>Datum Rodjenja:31.08.2005</h3> */}
      </div>
      <div className="informacije">
        <p>
          Hello Everyone,my name is Alen Muslic.I have 17 years and i go in high
          school Gimnazija in Novi Pazar.
        </p>

        <a href="https://github.com/alenmuslic" target="_blank">
          <FaGithub style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </div>
  );
}
