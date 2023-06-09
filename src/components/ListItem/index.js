//This is the component which shows each individual list item.

import React from "react";
import "./listItem.css";

function ListItem({ name, completed, tickItem }) {
  return (
    <li
      className={completed ? "tickedItem" : "untickedItem"}
      onClick={tickItem}
    >
      {name}
    </li>
  );
}

export default ListItem;
