import React from "react";
import "../../../App.css";
import styled from "styled-components";
import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./4.png";
import "./cart.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";

function Cart() {
  return (
    <>
      <CartArea>
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="imagecontainer">
                          <img src={Img1} alt="" />
                        </div>
                        <div class="details">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>₦360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <button className="reduce-btn">
                          <i class="fas fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="increase-btn"
                          type="button"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>₦720.00</h5>
                    </td>
                    <td>
                      <button className="delete">
                        <i className="far fa-times-circle"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="bottom_button my-5 d-flex">
                <div>
                  <button class="gray_btn" href="#">
                    Update Cart
                  </button>
                </div>
              </div>
              <div className="shipping">
                <div className="d-flex subtotal my-3">
                  <div className="mr-5">
                    <h5>Subtotal</h5>
                  </div>
                  <div className="ml-2">
                    <h5>₦2160.00</h5>
                  </div>
                </div>
                <div class="shipping_area d-flex">
                  <div className="mr-5">
                    <h5>Shipping</h5>
                  </div>
                  <div class="shipping_box">
                    <ul class="list">
                      <li>Flat Rate: ₦5.00</li>
                      <li>Free Shipping</li>
                      <li>Flat Rate: ₦10.00</li>
                      <li class="active">Local Delivery: ₦2.00</li>
                    </ul>
                  </div>
                </div>
                <tr class="out_button_area">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div class="checkout_btn_inner d-flex align-items-center">
                      <button className="gray_btn mr-2" href="#">
                        Continue Shopping
                      </button>
                      <Link to="/checkout">
                      <button className="proceedBtn">
                        Proceed to checkout
                      </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </CartArea>
      <Header />
      <Footer />
    </>
  );
}

const CartArea = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  .imagecontainer {
    margin-left: 0;
    width: 100px;
    overflow: hidden;
    object-fit: cover;
    object-positon: center;
    border: solid 1px black;
  }
  .imagecontainer img {
    position: relative;
    width: 100px;
  }
  .details {
    text-align: center;
    width: 70%;
    margin: auto;
  }
  .reduce-btn,
  .increase-btn {
    padding: 12px 5px;
    background-color: var(--colorLight);
    border: solid 1px #eeeeee;
  }
  .coupon {
    positon: absolute;
    right: 0;
  }
  .delete {
    background-color: transparent;
    color: var(--colorRed);
    border: none;
    :hover {
      color: var(--colorWhite);
      background-color: var(--colorRed);
    }
  }
  .proceedBtn {
    background-color: var(--colorBlack);
    border: none;
    color: white;
    padding: 13px;
    text-transform: uppercase;
  }
  .subtotal {
    font-size: 18px;
  }
  .cart_inner .table thead tr th {
    border-top: 0px;
    font-size: 14px;
    font-weight: 500;
    color: #777777;
    border-bottom: 0px !important;
  }
  .table tbody tr td {
    padding-top: 30px;
    padding-bottom: 30px;
    vertical-align: middle;
    align-self: center;
  }
  .shipping {
    background-color: var(--colorAsh);
    color: var(--colorBlack);
    padding: 20px;
    width: 50%;
    text-align: right;
    margin-bottom: 20px;
    margin-left: 30rem;
    ul {
      list-style-type: none;
    }
    li {
      padding: 7px;
    }
  }

  .cart_inner .table tbody tr td h5 {
    font-size: 14px;
    color: #222222;
    font-family: "Roboto", sans-serif;
    margin-bottom: 0px;
  }
  .cart_inner .table tbody tr td .product_count {
    margin-bottom: 0px;
  }
  .cart_inner .table tbody tr td .product_count input {
    width: 50px;
    height: 40px;
    outline: none;
    border: none;
    background-color: #eeeeee;
    text-align: center;
    box-shadow: none;
  }
  .cart_inner .table tbody tr td .product_count .increase {
    top: -2px;
  }
  .cart_inner .table tbody tr td .product_count .increase:before {
    content: "";
    height: 40px;
    width: 1px;
    position: absolute;
    left: -3px;
    top: 0px;
    background: #eeeeee;
  }
  .cart_inner .table tbody tr td .product_count .increase:after {
    content: "";
    height: 1px;
    width: 30px;
    position: absolute;
    left: -3px;
    top: 22px;
    background: #eeeeee;
  }
  .cart_inner .table tbody tr td .product_count .reduced {
    bottom: -6px;
  }
  .cart_inner .table tbody tr.bottom_button .gray_btn {
    line-height: 38px;
    background: #e8f0f2;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    padding: 0px 40px;
    display: inline-block;
    color: #222222;
    text-transform: uppercase;
    font-weight: 500;
  }
  .cart_inner .table tbody tr.bottom_button td:last-child {
    width: 60px;
  }
  .cart_inner .table tbody tr.bottom_button td .cupon_text {
    margin-left: -446px;
  }
  .cart_inner .table tbody tr.bottom_button td .cupon_text input {
    width: 200px;
    padding: 0px 15px;
    border-radius: 3px;
    border: 1px solid #eeeeee;
    height: 40px;
    font-size: 14px;
    color: #cccccc;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    margin-right: -3px;
    outline: none;
    box-shadow: none;
  }
  .cart_inner .table tbody tr.bottom_button td .cupon_text input.placeholder {
    font-size: 14px;
    color: #cccccc;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  .cart_inner
    .table
    tbody
    tr.bottom_button
    td
    .cupon_text
    input:-moz-placeholder {
    font-size: 14px;
    color: #cccccc;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  .cart_inner
    .table
    tbody
    tr.bottom_button
    td
    .cupon_text
    input::-moz-placeholder {
    font-size: 14px;
    color: #cccccc;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  .cart_inner
    .table
    tbody
    tr.bottom_button
    td
    .cupon_text
    input::-webkit-input-placeholder {
    font-size: 14px;
    color: #cccccc;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  .cart_inner .table tbody tr.bottom_button td .cupon_text .primary-btn {
    height: 40px;
    line-height: 38px;
    text-transform: uppercase;
    padding: 0px 38px;
    margin-right: -3px;
    border-radius: 0;
  }
  .cart_inner .table tbody tr.bottom_button td .cupon_text .gray_btn {
    padding: 0px 40px;
  }
  .cart_inner .table tbody tr.shipping_area td:nth-child(3) {
    vertical-align: top;
  }
   .shipping_box h6 {
    font-size: 14px;
    font-weight: normal;
    color: #222222;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
  }
   .shipping_box h6 i {
    color: #777777;
    padding-left: 5px;
  }
   .shipping_box .shipping_select {
    display: block;
    width: 100%;
    background: #e8f0f2;
    border: 1px solid #eeeeee;
    height: 40px;
    margin-bottom: 20px;
  }
  .cart_inner
    .table
    tbody
    tr.shipping_area
    .shipping_box
    .shipping_select
    .list {
    width: 100%;
    border-radius: 0px;
  }
  .cart_inner
    .table
    tbody
    tr.shipping_area
    .shipping_box
    .shipping_select
    .list
    li {
    font-size: 14px;
    font-weight: normal;
    color: #777777;
  }
  .cart_inner .table tbody tr.shipping_area .shipping_box input {
    height: 40px;
    outline: none;
    border: 1px solid #eeeeee;
    background: #e8f0f2;
    width: 100%;
    padding: 0px 15px;
    margin-bottom: 20px;
  }
  .cart_inner .table tbody tr.out_button_area .checkout_btn_inner {
    margin-left: -208px;
  }
  .cart_inner .table tbody tr.out_button_area .checkout_btn_inner .primary-btn {
    height: 40px;
    padding: 0px 30px;
    line-height: 38px;
    text-transform: uppercase;
    border-radius: 0;
  }
  .cart_inner
    .table
    tbody
    tr.out_button_area
    .checkout_btn_inner
    .primary-btn:hover:before {
    left: 240px;
  }

  .gray_btn {
    line-height: 38px;
    background: #e8f0f2;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    padding: 0px 40px;
    display: inline-block;
    color: #222222;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export default Cart;
