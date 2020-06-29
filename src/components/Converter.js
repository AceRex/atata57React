import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function Commodity() {
  return (
    <div className="converter">
      <p>Currency Converter</p>
      <Row>
        <li>Amount</li>
        <li>From</li>
        <li>To</li>
      </Row>
      <Row className="inputs">
        <input type="text" />
        <select>
          <option>NGN</option>
          <option>USD</option>
          <option>ERP</option>
        </select>
        <select>
          <option>USD</option>
          <option>NGN</option>
          <option>ERP</option>
        </select>
      </Row>
      <p className="Amount" id="convertedAmount">387 USD</p>
    </div>
  );
}

export default Commodity;
