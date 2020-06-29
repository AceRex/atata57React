import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import "./header.css";
import { Link } from "react-router-dom";
import MenuList from "./dropdownmenuList";
import SubMenu from "./submenu";
import { Navbar } from "react-bootstrap";
import Slider from "react-slick";

function HeaderBottom() {
  function handleOver(e) {
    e.preventDefault();
    var menu = document.getElementById("Dropdown");
    menu.classList.remove("hidden");
  }
  function mouseoverList(e) {
    var menu = document.getElementById("Dropdown");
    var submenu = document.getElementById("subMenu");
    submenu.classList.remove("hidden");
  }
  function handleOut(e) {
    e.preventDefault();
    var listShow = document.getElementById("Dropdown");
    var submenu = document.getElementById("subMenu");
    listShow.classList.add("hidden");
    submenu.classList.add("hidden");
  }
  function mouseOutList(e) {
    var submenu = document.getElementById("subMenu");
    submenu.classList.add("hidden");
  }

  return (
    <>
      <nav className="headerBottom navbar">
        <div className="On-lgScreen">
          <li onMouseOver={handleOver}>
            All Categories <i class="fas fa-bars"></i>
          </li>
          <li>
            <Link to="/TopSelling">Top Selling</Link>
          </li>
          <li>
            <Link to="/TopSelling">Top Ranking</Link>
          </li>
          <li>
            {" "}
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/TopSelling">Our Team</Link>
          </li>
          <li>
            <Link to="/TopSelling">About Us</Link>
          </li>
          <li>
            <Link to="Services">
              Services
              <i className="fas fa-angle-down" />
            </Link>
          </li>
        </div>
      </nav>

      <div
        id="Dropdown"
        className="AllCatDropMenu hidden"
        onMouseOver={(handleOver, mouseoverList)}
      >
        <Link to="/ProductPage">
          <MenuList name="Machinery" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Clothing" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Farm Product" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Livestock" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Shoes" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Raw Material" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Insurance" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Home Appliance" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Electonics" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Vehicle Parts" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Travel" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Medical" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Life and properties" />
        </Link>
        <Link to="/ProductPage">
          <MenuList name="Real Estate" />
        </Link>
      </div>
      <div id="subMenu" className="hidden" onMouseOut={handleOut}>
        <div className="SubMenu">
          <SubMenu
            header="All Machines"
            list1="Machinery Agriculture Machinery"
            list2="Equipment Air-Compressors"
            list3="Parts Apparel"
            list4="Textile Machinery Building Material Machinery
              Chemical"
            list5="Pharmaceutical Machinery Cleaning Equipment"
          />
          <SubMenu
            header="Used Machines"
            list1="Uk Used"
            list2="Naija Used"
            list3="used o"
            list4="USed"
            list5="USed"
            list6="USed noni"
            list7="USed"
          />
        </div>
        <div className="SubMenu">
          <SubMenu
            header="Placeholder"
            list1="Placeholder1"
            list2="Placeholder2"
            list3="Placeholder3"
            list4="Placeholder4"
            list5="Placeholder5"
            list6="Placeholder6"
            list7="Placeholder7"
            list8="Placeholder8"
          />
          <SubMenu
            header="All Machines"
            list1="Machinery Agriculture Machinery"
            list2="Equipment Air-Compressors"
            list3="Parts Apparel"
            list4="Textile Machinery Building Material Machinery
              Chemical"
            list5="Pharmaceutical Machinery Cleaning Equipment"
          />
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;
