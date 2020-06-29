import React from "react"
import {Link } from "react-router-dom"

function SubMenu(props) {
    
    return (
      <div className="subMenulist">
        <p>{props.header}</p>
        <div>
          <Link>
            <li>{props.list1}</li>
          </Link>
          <Link>
            <li>{props.list2}</li>
          </Link>
          <Link>
            <li>{props.list3}</li>
          </Link>
          <Link>
            <li>{props.list4}</li>
          </Link>
          <Link>
            <li>{props.list5}</li>
          </Link>
          <Link>
            <li>{props.list6}</li>
          </Link>
          <Link>
            <li>{props.list7}</li>
          </Link>
          <Link>
            <li>{props.list8}</li>
          </Link>
          <Link>
            <li>{props.list9}</li>
          </Link>
          <Link>
            <li>{props.list10}</li>
          </Link>
        </div>
      </div>
    );
}

export default SubMenu;