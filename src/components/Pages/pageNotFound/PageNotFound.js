import React, { Component } from "react";
// import show from "./undraw_file_searching_duff.svg";
import "./pageNotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h2>404 </h2>
        <p Id="thisText">Page not found</p>
        {/* <img src={show} /> */}
      </div>
    );
  }
}

export default NotFound;
