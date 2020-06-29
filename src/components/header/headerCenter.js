import React, { Component } from "react";
import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import RightMenu from "./rightMenu";
import HeaderLogo from "../logoComponents/headerLogo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderCenter extends Component {
  render() {
    return (
      <Navbar className="headerCenter">
        <Navbar.Brand href="/">
          <img
            src={HeaderLogo}
            className="d-inline-block align-top"
            alt="Atata57 logo"
          />
        </Navbar.Brand>
        <div class="search" id="search">
          <input
            type="search"
            name="searchColumn"
            id="searchColumn"
            placeholder="Search Goods, Company and insurance"
          />
          <button id="searchButton">
            Search
          </button>
        </div>
        <div className="contact">
          <div>
            <i class="fas fa-headset"></i>
          </div>

          <div className="contact-details">
            <div className="call-lines">
              <p> 01-222 234 67</p>
              <p> 01-222 234 68</p>
            </div>
            <div className="contact-mail">info@atata57.com</div>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default HeaderCenter;
