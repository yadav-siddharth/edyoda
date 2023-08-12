import React from "react";
import "./service.css";
import data from "./data";

const Service = () => {
  return (
    <div className="service">
      <h2 className="service-head">Access curated courses worth</h2>

      <h2 className="service-head2">
        <del style={{color:"red"}}>₹18,500 </del> 
        &nbsp;at just &nbsp;
        <h1>₹99</h1> &nbsp;per year!
      </h2> 
      <ul className="list">
        {data.map((item, id) => (
          <li className="service-list" key={item.id}>
            <img src={item.image} alt="book" className="book-icon" />
            <h1> {item.number}</h1>
            <h2> {item.desc}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
