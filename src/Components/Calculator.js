import React, { useState } from "react";

const Calculator=()=>{
    let [num1,setnum1]=useState("");
    let [num2,setnum2]=useState("");
    const [result, setResult] = useState('');

    function evaluate(operator) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
    
        if (isNaN(n1) || isNaN(n2)) {
          setResult('Invalid input');
          return;
        }
    
        switch (operator) {
          case '+':
            setResult(n1 + n2);
            break;
          case '-':
            setResult(n1 - n2);
            break;
          case '*':
            setResult(n1 * n2);
            break;
          case '/':
            setResult(n1 / n2);
            break;
          default:
            setResult('Invalid operator');
        }
      }
    

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num1" value={num1} onChange={(e)=>setnum1(e.target.value)}/>
            <input type="text" placeholder="Num1" value={num2} onChange={(e)=>setnum2(e.target.value)}/>
            <div className="buttons">
                <button onClick={()=>evaluate('+')}>+</button>
                <button onClick={()=>evaluate('-')}>-</button>
                <button onClick={()=>evaluate('*')}>*</button>
                <button onClick={()=>evaluate('/')}>/</button>
            </div>
            <div className="result">
                {
                     result==='Invalid input'?(
                        <div className="error">Error</div>
                     ):(
                        <div className="success">Success</div>
                     )
                }
                {
                    result
                }
            </div>
        </div>
    )
}

export default Calculator;