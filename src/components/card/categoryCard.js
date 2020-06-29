import React from "react";
import styled from "styled-components";
import Img1 from "../Image/machineTransparent.png";
import Img2 from "../Image/Computer.png";
import Img3 from "../Image/Furniture.png";
import Img4 from "../Image/gadgets.png";
import Img5 from "../Image/phones.png";

function CategoryCard(props) {
  return (
    <MyCateCard>
      <div className="d-flex mt-2 mb-2 px-2 CategoryTitle">
        <div className="CategoryName">
          <p>Consumer Electronics</p>
        </div>
        <hr />
      </div>
      <div className="d-flex px-2 CategoryTitle">
        <div className="r-big">
          <p className="r-big-title">Selected Novelty Products</p>
          <div className="r-big-image">
            <img src={Img1} />
          </div>
          <span className="r-big-btn">Source Now</span>
        </div>
        <div className="m-sm d-flex">
          <div className="row m-auto">
            <div className="d-flex">
              <div className="m-sm-item d-flex">
                <div className="m-sm-item-l">
                  <p>Top-ranking Products</p>
                  <span>Laptops</span>
                </div>
                <div className="m-sm-item-r">
                  <img src={Img2} />
                </div>
              </div>

              <div className="m-sm-item d-flex">
                <div className="m-sm-item-l">
                  <p>Portable Audio, Video & Accessories</p>
                </div>
                <div className="m-sm-item-r">
                  <img src={Img4} />
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="m-sm-item d-flex">
                <div className="m-sm-item-l">
                  <p>Top-ranking Products</p>
                  <span>Mobile Phones</span>
                </div>
                <div className="m-sm-item-r">
                  <img src={Img3} />
                </div>
              </div>

              <div className="m-sm-item d-flex">
                <div className="m-sm-item-l">
                  <p>Camera, Photo & Accessories</p>
                </div>
                <div className="m-sm-item-r">
                  <img src={Img2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="l-big">
          <p>Top Factories</p>
          <div className="imageContainer">
            <img src={Img5} />
          </div>
          <span>Customer rated Factories</span>
        </div>
      </div>
    </MyCateCard>
  );
}

const MyCateCard = styled.div`
  width: 97%;
  margin: auto;
  height: 390px;
  background-color: var(--colorLight);
  .CategoryTitle{
    .CategoryName{
      font-family: "Muli", sans-serif;
      font-weight: bold;
      font-size: 30px;
      padding: 5px;
    }
    hr{
      width: 70%;
      border: solid 5px var(--colorAsh);
    }
    .r-big{
      width: 350px;
      height:310px;
      background-color: var(--colorGreen);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .r-big-image{
      img{
        margin-top: -10px;
        width 300px;
      }
      }
      .r-big-title{
        color: var(--colorWhite);
        margin-top: 15px;
        margin-left: 30px;
        font-family: "Muli", sans-serif;
        font-size: 22px;
        width: 50%;
      }
      .r-big-btn{
margin-top: -30px;
margin-left: 20px;
background-color: var(--colorWhite);
width: 30%;
padding: 5px;
text-align: center;
font-weight: bold;
color: var(--colorGreen);
border-radius: 10px;
      }
    }
  }
  .m-sm{
    width: 650px;
    background-color: var(--colorWhite);
    overflow: hidden;
    padding: 5px;
   
    .m-sm-item{
      width: 320px;
      margin: auto;
      height: 150px;
      background-color: var(--colorWhite);
      border: solid 1px transparent;
       padding: 5px;
      :hover{
          border: solid 1px var(--colorAsh);
        }
      .m-sm-item-l{
        width: 150px;
        padding: 5px;
        
        p{
font-weight: bold;
font-size: 17px;
        }
      }
      .m-sm-item-r{
        overflow: hidden;
        img{
          width:170px;
        }
      }
    }
  }
  .l-big{
    width: 210px;
    margin-left: 2px;
    padding: 5px;
    background-color: var(--colorWhite);
    overflow: hidden;
    text-align: center;
    border: solid 1px transparent;
    :hover{
          border: solid 1px var(--colorAsh);
        }
    .imageContainer{
      height: 220px;
    }
    p{
      font-size: 17px;
      font-weight:bold;
    }
    img{
      width: 200px;
    }
  }
`;

export default CategoryCard;
