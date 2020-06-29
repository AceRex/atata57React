import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PriceList(props) {
  
 

  return (
    <div className="PriceListStyle">
      <span>{props.Commodity} / {props.country}</span>
      <span className="equals">=</span>
      <span>{props.price}</span>
      <span><i className={props.icon}></i></span>
   </div>
  );
}

export default PriceList;
