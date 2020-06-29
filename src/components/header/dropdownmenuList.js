import React from "react";
import "../accounts/account.css"

function MenuList(props) {
  return (
    <li className="menuList">
      {props.name}
      <i className="fas fa-angle-right" />
    </li>
  );
}

export default MenuList;
