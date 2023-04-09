import React from "react";
import "./Mojcss.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
  return (
    <div className="card">
      <div className="slika">
        <img src={props.imageURL} className="img" />
      </div>
      <div className="ostalo">
        <h1>{props.name}</h1>
        <p>{props.stars}</p>
        <p>{props.rating}</p>
        <p>
          <strong>{props.location}</strong>({props.reviews})
        </p>
      </div>
    </div>
  );
}
