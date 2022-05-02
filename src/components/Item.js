import React, {useState} from "react";

function Item({ name, category }) {

const [mode, setMode] = useState(false)

const itemClass = mode ? "in-cart" : ""
const buttonClass = mode ? "remove" : "add"
const buttonInnerText = mode ? "Remove from cart" : "Add to cart"



function buttonChange(){
  setMode(mode => !mode)
}

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {buttonChange}className={buttonClass}>{buttonInnerText}</button>
    </li>
  );
}

export default Item;
