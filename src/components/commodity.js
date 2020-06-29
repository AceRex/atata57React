import React from "react";
import styled from "styled-components";
import PriceList from "../components/pricelist";

function Commodity() {
  return (
    <CommodityStyle>
     
      <PriceStyle>
        <PriceList
          Commodity="Rice"
          country="NGN"
          price="15000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="GHN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Plastics"
          country="CHN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Cloths"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Rice"
          country="NGN"
          price="15000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="GHN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Plastics"
          country="CHN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Cloths"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Rice"
          country="NGN"
          price="15000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="GHN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Plastics"
          country="CHN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rice"
          country="NGN"
          price="15000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="GHN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Plastics"
          country="CHN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Cloths"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Rice"
          country="NGN"
          price="15000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="GHN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Plastics"
          country="CHN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Cloths"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="NGN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Rice"
          country="NGN"
          price="15000"
          icon=" fas fa-sort-up"
        />
        <PriceList
          Commodity="Rubber"
          country="GHN"
          price="5000"
          icon=" fas fa-sort-down"
        />
        <PriceList
          Commodity="Plastics"
          country="CHN"
          price="5000"
          icon=" fas fa-sort-up"
        />
      </PriceStyle>
    </CommodityStyle>
  );
}

const CommodityStyle = styled.div``;
const PriceStyle = styled.div`
  height: 340px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  width: 10px;
}
margin-top: 7px;

  .PriceListStyle {
    background-color: var(--colorBlack);
    color: var(--colorLight);
    text-align: center;
    font-size: 13px;
    display: flex;
  }
  .PriceListStyle span {
    padding: 9px;
    margin: 7px 0;
  }
`;

export default Commodity;
