import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/*Images */

import Item1 from "./categoryImages/accessories.png";
import Item2 from "./categoryImages/appliance.png";
import Item3 from "./categoryImages/clothes.png";
import Item4 from "./categoryImages/Computer.png";
import Item5 from "./categoryImages/Furniture.png";
import Item6 from "./categoryImages/gadgets.png";
import Item7 from "./categoryImages/machine.png";
import Item8 from "./categoryImages/phones.png";
import Item9 from "./categoryImages/shoes.png";

export class RelatedItems extends Component {
  render() {
    return (
      <CategoryItems>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item1} />
            </Link>
          </div>
          <span>accessories</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item2} />
            </Link>
          </div>
          <span>appliance</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item3} />
            </Link>
          </div>
          <span>clothes</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item4} />
            </Link>
          </div>
          <span>computer</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item5} />
            </Link>
          </div>
          <span>furniture</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item6} />
            </Link>
          </div>
          <span>gadgets</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item7} />
            </Link>
          </div>
          <span>machine</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item8} />
            </Link>
          </div>
          <span>phones</span>
        </div>
        <div className="CategoryItem px-3 mx-2">
          <div className="ImageContainer">
            <Link to="">
              <img src={Item9} />
            </Link>
          </div>
          <span>shoes</span>
        </div>
      </CategoryItems>
    );
  }
}

const CategoryItems = styled.div`
  width: 100%;
  margin: auto;
  padding: 5px 0;
  display: flex;
  text-align: center;
  background-color: var(--colorLight);
  .CategoryItem {
    background-color: var(--colorWhite);
  }
  .ImageContainer {
    width: 95px;
    height: 100px;
    overflow: hidden;
  }
  .ImageContainer img {
    width: 100px;
    object-position: bottom center;
    margin: auto;
    align-items: center;
    &:hover {
      transition: all 1s linear;
      transform: scale(1.2);
    }
  }
  span {
    font-family: "Muli", sans-serif;
    text-transform: capitalize;
    font-weight: bolder;
  }
`;

export default RelatedItems;
