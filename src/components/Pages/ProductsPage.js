import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context/context";
import NumberFormat from "react-number-format";
export default class ItemDisplay extends Component {
  render() {
    const {
      id,
      title,
      img,
      price,
      price2,
      info,
      review,
      orders,
      moq,
      inCart,
    } = this.props.product;

    return (
      <ProductWrapper className="col-2 card col-md-2 col-lg-2">
        <ProductConsumer>
          {(value) => (
            <>
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
              </div>
              <div className="cardFooter">
                <Link to="/details">
                  <p
                    className="title mb-2"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {title}
                  </p>
                </Link>
                <span className="details">{info}</span>
                <h5 className="price">
                  <NumberFormat
                    className={"pr-2 priceStyle"}
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                  />
                  -
                  <NumberFormat
                    className={"pl-2 priceStyle"}
                    value={price2}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                  />
                  <span className="PriceAdInfo">{"/ Pieces"}</span>
                </h5>

                <div className="m-2 d-flex mb-4">
                  <span className="info moq">
                    {"( MOQ"} {moq} {")"}
                  </span>
                </div>
                <div className="button">
                  <Link to="/Whislist">
                    <button
                        className="whislistBtn p-2 mx-2 mb-2"
                        disabled={inCart ? true : false}
                      >
                        {inCart ? (
                          <p className="text-capitalized mb-0" disabled></p>
                        ) : (
                          <span>View in Cart</span>
                        )}
                      </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </ProductConsumer>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    transition: all 1s linear;
  }

  .cardFooter {
    background: transparent;
    border-top: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 1s linear;
  }
  .details {
    font-size: 16px;
    margin-bottom: 4px;
  }
  .title {
    color: var(--colorBlack);
    font-family: "Muli", sans-serif;
    font-size: 16px;
  }

  .price {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    font-family: "Muli", sans-serif;
    margin: 10px auto;
    text-overflow: ellipsis;

    .priceStyle {
      font-weight: 700;
      font-size: 18px;
    }

    .PriceAdInfo {
      color: var(--colorAsh);
      font-weight: 100;
    }
  }
  .moq {
    font-size: 11px;
    text-align: center;
    margin: auto;
  }

  .cart-btn {
    background-color: var(--colorGreen);
    border: none;
    font-size: 14px;
    color: #fff;
    outline: none;
    width: 50%;
  }
  .whislistBtn {
    background-color: var(--colorYellow);
    font-size: 14px;
    border: none;
    padding: 5px;
    width: 90%;
    outline: none;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
      color: #000;
      text-decoration: none;
    }
  }
  .img-container {
    overflow: hidden;
    width: 178px;
    height: 170px;
  }
  .img-container img {
    width: 200px;
    margin: auto;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .card-img-top {
    transition: all 1s linear;
  }
`;
