import React, { useState } from "react";
import './calculatorButton.css'

const CalculatorButton = () => {
    const [result , setResult] = useState("")
    const handleClick = (e) => {
        setResult(result.concat(e.target.value))
    }
    const clear = () => {
        setResult("")
    }
    const calculate = () => {
        setResult(eval(result).toString())
    }
return (
    <div>
        <h1>React Calulator</h1>
        <div>
            <input type="text" className="screen" placeholder="0" value={result} />
        </div>
        <div className="calc">
        <div>
            <button className="numberButton" value="1" onClick={handleClick}>1</button> 
            <button className="numberButton" value="2" onClick={handleClick}>2</button>
            <button className="numberButton" value="3" onClick={handleClick}>3</button>
            <button className="numberButton" value="4" onClick={handleClick}>4</button> 
        </div>
        <div>
            <button className="numberButton" value="5" onClick={handleClick}>5</button>
            <button className="numberButton" value="6" onClick={handleClick}>6</button>
            <button className="numberButton" value="7" onClick={handleClick}>7</button> 
            <button className="numberButton" value="8" onClick={handleClick}>8</button>
        </div>
        <div>
            <button className="numberButton" value="9" onClick={handleClick}>9</button>
            <button className="numberButton" value="0" onClick={handleClick}>0</button>
            <button className="numberButton" value="." onClick={handleClick}>.</button> 
            <button className="opButton" value="%" onClick={handleClick}>%</button>
        </div>
        <div>
            <button className="opButton" value="*" onClick={handleClick}>x</button>
            <button className="opButton" value="-" onClick={handleClick}>-</button>
            <button className="opButton" value="+" onClick={handleClick}>+</button>
            <button className="opButton" value="/" onClick={handleClick}>/</button>
        </div>
        <div>
            <button className="opButton special" onClick={clear}>C</button>
            <button className="opButton special" onClick={calculate}>=</button>
        </div>
        </div>
        
    </div>
)
}

export default CalculatorButton