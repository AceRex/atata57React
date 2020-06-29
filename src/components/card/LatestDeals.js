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
          <p>WEEKLY DEALS</p>
        </div>
        <hr />
      </div>
      <div className="group d-flex">
        <div className="row Deal-poster">
          <div className="percentage-off">
            <p>Percentage Off</p>
          </div>
          <div className="timer">
            <span>10%</span>
          </div>
        </div>
        <div className="bg-white d-flex">
          <div className="item">
            <div className="imageContainer">
              <img src={Img1} />
            </div>
            <div className="price">Bamboo Color</div>
            <div className="details">
              <span>AC,Ghana</span>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img src={Img3} />
            </div>
            <div className="price">Gaming</div>
            <div className="details">
              <span>LG, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </MyCateCard>
  );
}

const MyCateCard = styled.div`
  width: 620px;
  margin: auto;
  height: 230px;
  background-color: var(--colorLight);
  .CategoryTitle {
    .CategoryName {
      font-family: "Muli", sans-serif;
      font-weight: bold;
      font-size: 16px;
      padding: 5px;
    }
    hr {
      width: 70%;
      border: solid 5px var(--colorAsh);
    }
  }

  .group {
    background-color: var(--colorYellow);
    text-align: center;
    width: 97%;
    margin: auto;
    height: 173px;
    padding: 10px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    .Deal-poster {
      width: 250px;
      height: 173px;
      padding: 10px;
      color: var(--colorWhite);
      p {
        font-size: 17px;
        font-weight: bold;
      }
      span {
        padding: 20px;
        color: var(--colorYellow);
        background-color: var(--colorWhite);
        font-size: 30px;
        font-weight: bold;
      }
    }
    .bg-white {
      background-color: var(--colorWhite);
    }
    .item {
      border: solid 1px var(--colorLight);
      background-color: var(--colorWhite);
      width: 200px;
      margin: 1px;
      height: 170px;

      :hover {
        border: solid 1px var(--colorAsh);
      }
      .imageContainer {
        overflow: hidden;
        width: 200px;
        margin: auto;
        img {
          width: 160px;
          height: 130px;
        }
      }
      .price {
        font-weight: bold;
      }
    }
  }
`;

export default CategoryCard;
