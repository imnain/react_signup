import React from "react";
import { useState } from "react";

const divStyle = {justifyContent: 'center', alignItems: 'center', border: '1px solid red'}

function Counter(){
    const [count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count + 1);
    }
    function handleDecrement(){
        setCount(count - 1);
    }

    return(
        <div style={divStyle}>
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}> Decrement</button>
        <div>{count}</div>
        </div>
    );
}

export default Counter;