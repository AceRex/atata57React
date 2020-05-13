import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class FeaturedLinks extends Component {
  render() {
    return (
      <div className="w-100">
        <Links>
          <LinksItem>
            <Link to="/atataPay">
              <LinksTop>
                <i class="fas fa-money-check"></i>
              </LinksTop>
            </Link>

            <Link to="/atataPay">
              <LinksBottom>Atata Pay</LinksBottom>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataInsurance">
              <LinksTop>
                <i class="fas fa-house-damage"></i>
              </LinksTop>
            </Link>

            <Link to="/atataInsurance">
              <LinksBottom>Atata Insurance</LinksBottom>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataLogistics">
              <LinksTop>
                <i class="fas fa-shipping-fast"></i>
              </LinksTop>
            </Link>

            <Link to="/atataLogistics">
              <LinksBottom>Atata Logistics</LinksBottom>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataWarehouse">
              <LinksTop>
                <i class="fas fa-warehouse"></i>
              </LinksTop>
            </Link>
            <Link to="/atataWarehouse">
              <LinksBottom>Atata Warehouse</LinksBottom>
            </Link>
          </LinksItem>

          <LinksItem>
            <Link to="/atataWallet">
              <LinksTop>
                <i class="fas fa-wallet"></i>
              </LinksTop>
            </Link>

            <Link to="/atataWallet">
              <LinksBottom>Atata Wallet</LinksBottom>
            </Link>
          </LinksItem>
        </Links>
      </div>
    );
  }
}
const Links = styled.div`
  display: flex;
  margin: auto;
  background-color: var(--colorLight);
  a {
    color: var(--colorBlack);
    text-decoration: none;    
    :hover{
      color: var(--colorYellow);
    }
  }
`;
const LinksItem = styled.div`
  width: 100%;
  margin: 7px;
  text-align: center;
  background-color: var(--colorAsh);
  :hover{
    background-color: var(--colorGreen);
    color: var(--colorYellow);
  }
`;
const LinksTop = styled.div`
  font-size: 50px;
  margin: 5% 0;

`;
const LinksBottom = styled.div`
  font-family: "Muli", sans-serif;
  margin: 5% 0;
`;
