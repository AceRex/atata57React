import React from "react";
import styled from "styled-components";
import Img from "../Image/clothe1.png";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

function ItemCards(props) {
  return (
    <ItemCard>
      <div className="image-container">
        <img src={props.img} />
      </div>
      <div className="Card-top">
        <p>{props.title}</p>
        <p className="moq">{props.moq}</p>
      </div>
      <div className="amount mb-2">
        <NumberFormat
          className={"px-1"}
          value={props.amount1}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
        -
        <NumberFormat
          className={"px-1"}
          value={props.amount2}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
      </div>
      
      <div className="footer">
        <Link to="/cart" className="btn">
          <span className="fas fa-cart-plus"></span>
        </Link>
      </div>
    </ItemCard>
  );
}

const ItemCard = styled.div`
  background-color: var(--colorWhite);
  margin-top: 6rem;
  margin: auto;
  width: 270px;
  height: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0px 0px 50px #00000015;
  padding: 10px;
  border: solid 0.5px transparent;

  :hover {
    transition: 0.3s;
    border: solid 0.5px var(--colorAsh);
  }
    .moq {
      font-size: 10px;
    
  }
  .Card-top {
    span {
      background-color: var(--colorRed);
      color: var(--colorWhite);
      font-size: 10px;
      font-weight: bold;
      margin: 7px 0px;
      padding: 5px 10px;
      border-radius: 5px;
      font-family: "Muli", sans-serif;
    }
    p {
      margin-top: 5px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: "Muli", sans-serif;
    }
  }
  .image-container {
    width: 250px;
    margin: auto;
    height: 200px;
    overflow: hidden;
    align-content: center;
    justify-content: center;
    align-item: center;
    img {
      width: 250px;
      margin: auto;
      height: 200px;
    }
  }
  .amount {
    text-align: center;
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .details {
    p {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--colorAsh);
    }
  }
  .footer {
    display: flex;
    padding: 3px;
    margin-top: 5px;
    background-color: var(--colorLight);
    .btn {
      background-color: var(--colorYellow);
      color: var(--colorBlack);
      width: 100%;
      font-size: 15px;
    }
  }
`;
export default ItemCards;
