import React from "react";

export default function UseState(){
    const [count,setCount] = React.useState(0)


    function decrement(){
        setCount((prevCount)=> prevCount - 1)
    }

    function increment(){
        setCount(prevCount => prevCount + 1)
    }
    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick = {increment}>+</button>
        </div>
    )
}