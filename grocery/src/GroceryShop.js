import "./GroceryShop.css"
import { useState } from "react"
import guava from "./images/grocery_1.jpg"
import apple from "./images/grocery_2.jpg"
import veg from "./images/grocery_3.jpg"
import banana from "./images/grocery_3.jpg"
import grapes from "./images/grocery_4.jpg"
import heart from "./images/heart.svg"
import shop from "./images/grocery_5.jpg"

const svgMap={
    apple,
    guava,
    banana,
    veg,
    guava,
    grapes,
    shop
}
function GroceryShop({type}){
    const [click,setClick]=useState(0)

    const handleClick=()=>{
        setClick(click+1)

    }
    return <div className="grocery-shop">
        <img className="grocery" alt="grocery" src={svgMap[type]} />
        <img className="heart" alt="heart" 
        src={heart}
        onClick={handleClick}
        style={{ width:10+10*click+'px'} } />
    </div>
}
export default GroceryShop
