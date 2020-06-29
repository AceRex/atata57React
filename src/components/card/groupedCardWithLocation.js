import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import Img1 from "../Image/shoes.png";
import Img2 from "../Image/phones.png";
import Img3 from "../Image/gadgets.png";

function groupedCard() {
  return (
    <Group>
      <p className="card-title">Global Original Sources</p>
      <div className="group d-flex">
        <div className="item">
          <div className="imageContainer">
            <img src={Img2} />
          </div>
          <div className="price">Bluetooth Mobile Phone</div>
          <div className="details">
            <span>ABJ,Nigeria</span>
          </div>
        </div>
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
    </Group>
  );
}

const Group = styled.div`
  background-color: var(--colorLight);
  margin: 5px 10px;
  border-radius: 5px;
  padding: 5px;
  .card-title {
    font-size: 16px;
    font-weight: bold;
  }
  .group {
    background-color: var(--colorWhite);
    text-align: center;
    border: solid 1px var(--colorLight);
    width: 600px;
    height: 173px;
    padding: 10px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    .item {
      border: solid 1px var(--colorLight);
      margin: 2px;
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
export default groupedCard;
