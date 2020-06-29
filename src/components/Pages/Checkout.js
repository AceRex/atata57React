import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Confirm Delivery Address",
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: "Delivery Method",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Payment Method",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];
function Checkout() {
  return (
    <>
      <Styles>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Styles>

      <Header />
    </>
  );
}

const Styles = styled.div`
  width: 80%;
  height: 500px;
  margin: auto;
  padding: 10px;
  margin-top: 10%;
  background-color: var(--colorWhite);
  box-shadow: 5px 5px 50px #00000017;
  .menu {
    a {
      .active {
        .item {
          color: var(--colorGreen);
        }
      }
    }
  }
`;

export default Checkout;
