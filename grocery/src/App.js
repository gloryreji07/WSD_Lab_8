import "./App.css"
import GroceryShop from "./GroceryShop";
import { useState } from "react";
function getRandomGrocery(){
    let grocery=['apple','veg','banana','grapes','guava','shop']
    return grocery[Math.floor(Math.random()*grocery.length)]
}

function App(){
   const [grocery,setGrocery]=useState([]) 
    const handleClick=()=>{       
       setGrocery([...grocery,getRandomGrocery()])               
    }

    const renderedGrocery=grocery.map((grocery,index)=>{
       return <GroceryShop type={grocery} key={index} />

    })
    return <div className="app">
        <button onClick={handleClick}>Add Grocery</button>
        <div className="grocery-list">{renderedGrocery}</div>
        
    </div>
}
export default App
