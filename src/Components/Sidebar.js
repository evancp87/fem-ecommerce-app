import React from "react";
import classnames from "classnames";
function Sidebar(props) {
  return (
    <aside
      className={classnames("sidebar", {
        active: props.openSidebar,
      })}
    >
      <ul className="sidebar__nav">
        <li className="sidebar__nav-item">Collections</li>
        <li className="sidebar__nav-item">Men</li>
        <li className="sidebar__nav-item">Women</li>
        <li className="sidebar__nav-item">About</li>
        <li className="sidebar__nav-item">Contact</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
