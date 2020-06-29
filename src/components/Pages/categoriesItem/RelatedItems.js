import React from "react";
import { ProductConsumer } from "../../../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ItemCarousel(props) {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          title,
          seller,
          img,
          img1,
          img2,
          img3,
          price,
          price2,
        } = value.detailProduct;
        return (
          <div className="d-flex mx-auto">
            <ItemSlider>
              <div
                className="slider-box"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <div className="img-box">
                    <img src={img1} />
                  </div>
                </Link>

                <p className="time">New</p>
                <div className="detail">
                  <p className="title"> {title} </p>
                  <p>Sold by: {seller}</p>
                </div>

                <Link to="/details">
                  <div
                    className="cart"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    <p>View Product</p>
                  </div>
                </Link>
              </div>
            </ItemSlider>
            <ItemSlider>
              <div
                className="slider-box"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <div className="img-box">
                    <img src={img2} />
                  </div>
                </Link>

                <p className="time">New</p>
                <div className="detail">
                  <p className="title"> {title} </p>
                  <p>Sold by: {seller}</p>
                </div>

                <Link to="/details">
                  <div
                    className="cart"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    <p>View Product</p>
                  </div>
                </Link>
              </div>
            </ItemSlider>
            <ItemSlider>
              <div
                className="slider-box"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <div className="img-box">
                    <img src={img} />
                  </div>
                </Link>

                <p className="time">New</p>
                <div className="detail">
                  <p className="title"> {title} </p>
                  <p>Sold by: {seller}</p>
                </div>

                <Link to="/details">
                  <div
                    className="cart"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    <p>View Product</p>
                  </div>
                </Link>
              </div>
            </ItemSlider>
            <ItemSlider>
              <div
                className="slider-box"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <div className="img-box">
                    <img src={img3} />
                  </div>
                </Link>

                <p className="time">New</p>
                <div className="detail">
                  <p className="title"> {title} </p>
                  <p>Sold by: {seller}</p>
                </div>

                <Link to="/details">
                  <div
                    className="cart"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    <p>View Product</p>
                  </div>
                </Link>
              </div>
            </ItemSlider>
            <ItemSlider>
              <div
                className="slider-box"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <div className="img-box">
                    <img src={img3} />
                  </div>
                </Link>

                <p className="time">New</p>
                <div className="detail">
                  <p className="title"> {title} </p>
                  <p>Sold by: {seller}</p>
                </div>

                <Link to="/details">
                  <div
                    className="cart"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    <p>View Product</p>
                  </div>
                </Link>
              </div>
            </ItemSlider>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const ItemSlider = styled.div`
  .slider-box {
    margin: 20px;
    height: 300px;
    width: 200px;
    position: relative;
    background-color: var(--colorWhite);
    border: solid 1px var(--colorLight);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slider-box a {
    color: var(--colorYellow);
    text-decoration: none;
  }
  .img-box {
    height: 170px;
  }
  .img-box img {
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .time {
    position: absolute;
    font-weight: bold;
    top: 5px;
    right: 20px;
    color: var(--colorYellow);
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    font-size: 13px;
    line-height: 15px;
  }
  .title {
    font-size: 18px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
  }
`;

export default ItemCarousel;
