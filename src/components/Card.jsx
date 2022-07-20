import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL = {props.imgURL}/>
        </div>
        <Details phone ={props.phone} email ={props.email} />
      </div>
    </div>
  );
}
export default Card;
