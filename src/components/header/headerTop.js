import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import MainScreen from "../accounts/mainScreen";
import RightMenu from "./rightMenu";

function HeaderTop() {
  const [show, setShow] = useState(false);

  return (
    <nav class="headerTop">
      <ul class="leftMenu">
        <li class="Menu2">
          <select name="currency" id="currency">
            <option value="dollar">US dollar</option>
            <option value="Naira">NGN Naira</option>
          </select>
        </li>
        <RightMenu />
      </ul>
    </nav>
  );
}

export default HeaderTop;
