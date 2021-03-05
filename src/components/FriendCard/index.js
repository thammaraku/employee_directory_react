import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>

      {/* the strange thing that react did is it calls function onclick for us
      so we need to make put it as anonymous function to stop that and wait to execute only when click */}
      {/* <span className="remove" onClick={props.removeFriend()}>𝘅</span> */}
      <span className="remove" onClick={() => props.removeFriend(props.id)}>𝘅</span>
    </div>
  );
}


export default FriendCard;
