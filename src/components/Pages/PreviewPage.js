import React, { useState } from "react";
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { Rating } from "semantic-ui-react";
import Items from "./categoriesItem/RelatedItems";
import Header from "../header/header";
import Footer from "../footer/footer";

function PreviewPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <ProductConsumer>
        {(value) => {
          const {
            id,
            seller,
            img,
            img1,
            img2,
            img3,
            info,
            productImg1,
            productImg2,
            productImg3,
            productImg4,
            price,
            price2,
            companyInfo,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container-fluid mt-4 py-5">
              <div className="col-12 mt-5">
                {/* Product info */}
                <div className="row mt-5">
                  <div className="col-4 col-md-4 mt-5">
                    <CartImage>
                      <div className="top-section">
                        <img src={img} id="imageContainer" alt="product" />
                      </div>
                      <div className="mainNav">
                        <div className="nav">
                          <img src={img} alt="product" />
                          <img src={img1} alt="product" />
                          <img src={img2} alt="product" />
                          <img src={img3} alt="product" />
                        </div>
                      </div>
                    </CartImage>
                  </div>

                  {/* Product Text */}

                  <div className="col-5 col-md-5  mt-5">
                    <ProductText>
                      <h1 className="item-title">{title}</h1>
                      <h4 className="text-title muted-text text-uppercase text-mutted mt-3 mb-2">
                        Sold by :{" "}
                        <span className="text-uppercase">{seller}</span>
                      </h4>

                      <div className=" PriceCategory d-flex py-2">
                        <div className="col">
                          <span className="inPieces">2-19</span>
                          <p className="inPiecesPrice">
                            500
                            <span className="small">/pieces</span>
                          </p>
                        </div>
                        <div className="col">
                          <span className="inPieces">20-99</span>
                          <p className="inPiecesPrice">
                            400
                            <span className="small">/pieces</span>
                          </p>
                        </div>
                        <div className="col">
                          <span className="inPieces">100-299</span>
                          <p className="inPiecesPrice">
                            300
                            <span className="small">/pieces</span>
                          </p>
                        </div>
                        <div className="col">
                          <span className="inPieces">>=300</span>
                          <p className="inPiecesPrice">
                            100
                            <span className="small">/pieces</span>
                          </p>
                        </div>
                      </div>

                      <p className="muted-text mt-3 mb-0">
                        Shipping from:{" "}
                        <span className="color-black font-weight-bold">
                          Nigeria
                        </span>
                      </p>
                      <p className="muted-text mt-3 mb-3">
                        Available Logistics:
                        <span className="font-weight-bold btn px-3">
                          {" "}
                          FedEx
                        </span>{" "}
                        <span className="font-weight-bold btn px-3">
                          {" "}
                          DHL
                        </span>{" "}
                        <span className="font-weight-bold btn px-3"> GIG</span>
                      </p>

                      <div>
                        <ButtonContainer>
                          <Link to="/whislist">
                            <span className="circle">
                              <i className="fas fa-plus"></i>
                            </span>
                            Add to whislist
                          </Link>
                          <Link to="/cart">
                            <span
                              className="circle"
                              disabled={inCart ? true : false}
                              onClick={() => {
                                value.addToCart(id);
                              }}
                            >
                              <i className="fas fa-plus"></i>
                              {inCart ? "inCart" : "Add to Cart"}
                            </span>
                          </Link>
                        </ButtonContainer>
                      </div>
                    </ProductText>
                  </div>

                  <div className="col-3  mt-5">
                    <ContactSeller>
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
                        <Form.Group md="4" controlId="validationCustom01">
                          <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                          />
                        </Form.Group>
                        <Form.Group md="4" controlId="validationCustom01">
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter Email"
                          />
                        </Form.Group>
                        <Form.Group md="4">
                          <textarea
                            class="form-control"
                            placeholder="Message Here"
                            aria-label="With textarea"
                          ></textarea>
                        </Form.Group>
                        <ButtonContainer>
                          <button className="whislistBtn mx-auto">
                            Send Message
                          </button>
                        </ButtonContainer>
                      </Form>
                    </ContactSeller>
                  </div>
                </div>
              </div>

              {/* Item Descriptions */}

              <div className="col-12 mt-2 py-5">
                <div className="row">
                  <div className="col-9">
                    <AboutSeller>
                      {/* Product Details Ends*/}
                      <div id="ProductDetails" className="mb-4">
                        <p className="title">Product Details</p>
                        <span>{info}</span>
                      </div>
                      {/* Product Details Ends*/}

                      {/* Product Image*/}
                      <div id="ProductImage" className="mb-4">
                        <p className="title">Product Image</p>
                        <div className="imageContainer">
                          <img src={productImg1} />
                        </div>
                        <div className="imageContainer">
                          <img src={productImg2} />
                        </div>
                        <div className="imageContainer">
                          <img src={productImg3} />
                        </div>
                        <div className="imageContainer">
                          <img src={productImg4} />
                        </div>
                        <div className="imageContainer">
                          <img src={productImg2} />
                        </div>
                        <div className="imageContainer">
                          <img src={productImg1} />
                        </div>
                      </div>
                      {/* Product Image Ends*/}

                      {/* Comment */}
                      <div id="Productreview" className="mb-4">
                        <p className="title">Comments</p>
                        <div className="row">
                          {/* Comment section */}
                          <div className="col-6 px-5 mb-4 ReviewComment">
                            <span className="author">Mark</span>
                            <div className="comment mb-4">
                              <small>this product Is super!</small>
                              <br />
                              <Rating
                                maxRating={5}
                                defaultRating={1}
                                icon="star"
                                size="tiny"
                                disabled
                              />
                            </div>
                            <span className="author">Frank</span>
                            <div className="comment mb-4">
                              <small>this product Is super!</small>
                              <br />
                              <Rating
                                maxRating={5}
                                defaultRating={3}
                                icon="star"
                                size="tiny"
                                disabled
                              />
                            </div>
                            <span className="author">Enny</span>
                            <div className="comment mb-4">
                              <small>this product Is super!</small>
                              <br />
                              <Rating
                                maxRating={5}
                                defaultRating={2}
                                icon="star"
                                size="tiny"
                                disabled
                              />
                            </div>
                            <span className="author">Tola</span>
                            <div className="comment mb-4">
                              <small>this product Is super!</small>
                              <br />
                              <Rating
                                maxRating={5}
                                defaultRating={4}
                                icon="star"
                                size="tiny"
                                disabled
                              />
                            </div>
                          </div>

                          {/* rating */}
                          <div className="col-6 px-5">
                            <Form.Group controlId="formGridEmail">
                              <Form.Control
                                type="Name"
                                placeholder="Enter Name"
                              />
                            </Form.Group>
                            <Form.Group controlId="formGridEmail">
                              <textarea
                                class="form-control"
                                placeholder="Enter Text Here..."
                                aria-label="With textarea"
                              ></textarea>
                            </Form.Group>
                            <button className="btn review">Review</button>
                            <span className="rater-star">
                              <Rating
                                maxRating={5}
                                defaultRating={1}
                                icon="star"
                                size="small"
                              />

                              <small className="text-muted px-2">
                                Star Rating
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Comment End */}

                      {/* Company Information */}
                      <div id="companyInformation" className="mb-4">
                        <p className="title">Company Information</p>
                        <span>{companyInfo}</span>
                      </div>
                      {/* Company Information End*/}

                      {/* FAQs */}
                      <div id="FAQs" className="mb-4">
                        <p className="title">FAQs</p>
                        <span>{info}</span>
                      </div>
                      {/* FAQs End*/}
                    </AboutSeller>
                  </div>

                  <div className="col-3 py-3">
                    <SideContent>
                      <div
                        class="ui medium rectangle test ad"
                        data-text="Medium Rectangle"
                      ></div>
                    </SideContent>
                  </div>
                </div>
              </div>
              {/* Item Descriptions End*/}
            </div>
          );
        }}
      </ProductConsumer>
      <div className="col-12 mx-auto"></div>
      <RelatedItems>
        <h2 className=" mt-5"> Related Items</h2>
        <Items />
      </RelatedItems>
      <Header />
      <Footer />
    </>
  );
}

const SideContent = styled.div`
  display: flex;
  background-color: var(--colorWhite);
  height: auto;
`;
const RelatedItems = styled.div`
  h2 {
    font-family: "Bebas Neue", cursive;
    font-size: 25px;
    text-align: center;
    letter-spacing: 5px;
  }
`;

const AboutSeller = styled.div`
  background-color: var(--colorWhite);
  padding: 10px;

  .author {
    font-size: 17px;
    font-weight: bold;
  }
  .ReviewComment {
    height: 250px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .btn {
    background-color: var(--colorYellow);
  }
  .content {
    margin-top: 15px;
  }
  .rater-star {
    position: absolute;
    right: 20px;
  }
  .react-rater-star {
    font-size: 20px;
  }
  .imageContainer {
    width: 100%;
    margin: auto;
    overflow: hidden;
  }
  span {
    font-size: 14px;
  }
  .title {
    border-bottom: 0.5px dashed var(--colorAsh);
    font-size: 25px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid var(--colorYellow);
    border-radius: 4px;
    background-color: var(--colorLight);
    resize: none;
    font-size: 13px;
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid var(--colorYellow);
    border-radius: 4px;
    background-color: var(--colorLight);
    resize: none;
    font-size: 13px;
  }
`;
const ContactSeller = styled.div`
  background-color: var(--colorWhite);
  box-shadow: 2px 2px 5px var(--colorAsh);

  input {
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid var(--colorYellow);
    border-radius: 4px;
    background-color: var(--colorLight);
    font-size: 13px;
  }

  input:focus {
    outline: none;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid var(--colorYellow);
    border-radius: 4px;
    background-color: var(--colorLight);
    resize: none;
    font-size: 13px;
  }
`;
const ProductText = styled.div`
  background-color: var(--colorWhite);
  padding: 15px;
  width: 100%;
  margin: auto;

  .color-black {
    color: black;
  }
  .price {
    font-family: "Muli", sans-serif;
    font-size: 30px;
  }
  .PriceCategory {
    border-top: 0.5px solid var(--colorAsh);
    text-align: center;
  }
  .btn {
    border-radius: 50px;
    border: 1px solid transparent;
    padding: 7px;
    &:hover {
      border-color: var(--colorYellow);
      color: var(--colorYellow);
      transition: 0.3s;
    }
  }
  .item-title {
    font-family: "Muli", sans-serif;
    font-weight: bold;
    font-size: 20px;
  }
  .muted-text {
    color: var(--colorAsh);
    font-size: 16px;
  }
  .inPiecesPrice {
    font-size: 20px;
    font-weight: bold;
  }
`;
const ButtonContainer = styled.div`
  display: flex;

  .cart-btn {
    background-color: var(--colorGreen);
    border: none;
    font-size: 14px;
    color: #fff;
    outline: none;
    padding: 15px;
    width: 90%;
  }
  .whislistBtn {
    background-color: var(--colorYellow);
    font-size: 14px;
    border: none;
    padding: 15px;
    width: 90%;
    outline: none;
  }
  .circle {
    padding: 10px;
    border-radius: 50px;
  }
`;
const CartImage = styled.div`
  width: 100%;

  .top-section {
    height: 350px;
    overflow: hidden;
    position: relative;
  }
  #imageContainer {
    width: 100%;
    margin: auto;
    height: 340px;
  }
  .mainNav {
    background-color: var(--colorWhite);
    width: 100%;
    padding: auto;
  }
  .nav {
    text-align: center;
    width: 94%;
    margin: auto;
  }
  .nav img {
    width: 80px;
    height: 50px;
    border: 1px solid var(--colorLight);
    margin: 8px 2px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      border: 1px solid var(--colorAsh);
    }
  }
`;

export default PreviewPage;
