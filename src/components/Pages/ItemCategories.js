import React from "react";
import { Tab } from "semantic-ui-react";
import styled from "styled-components";
import Items from "./categoriesItem/itemCarousel"
import Items2 from "./categoriesItem/itemCarousel2";

const panes = [
  {
    menuItem: "New Product",
    render: () => (
      <Style>
        <Tab.Pane attached={false}>
          <div>
            <Items2 />
            <Items />
          </div>
        </Tab.Pane>
      </Style>
    ),
  },
  {
    menuItem: "Best Seller",
    render: () => (
      <Style>
        <Tab.Pane attached={false}>
          <div>
            <Items />
            <Items2 />
          </div>
        </Tab.Pane>
      </Style>
    ),
  },
  {
    menuItem: "Featured Product",
      render: () => (
        <Style>
      <Tab.Pane attached={false}>
        <div>
          <Items2 />
          <Items />
        </div>
        </Tab.Pane>
        </Style>
    ),
  },
];

const TabExampleSecondary = () => (
  <Style>
    <Tab menu={{ secondary: true }} panes={panes} />
  </Style>
);

const Style = styled.div`
  .ui.menu {
    width: 35%;
    margin: auto;
  }
  .ui.menu .item {
    border: solid 1px var(--colorAsh);
    background-color: var(--colorLight);
  }
  .ui.menu .active.item {
    color: var(--colorYellow);
    font-weight: bold;
  }
  .segment {
    background-color: var(--colorLight);
    border: none !important;
  }
`;



export default TabExampleSecondary;


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

