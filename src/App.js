import { useState } from "react";
function App() {
  const [calc,setcalc] = useState('');
  const [result,setresult] = useState('');
  const ops = ['+','-','*','/'];

  const updatecalc = value => {
    
    if(ops.includes(value) && calc == '' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }
    setcalc(calc + value);
    if(!ops.includes(value)){
      setresult(eval(calc+value).toString());
    }
  }


  const createDigits = () =>{
    const digits = [];
    for(let i = 1;i<10;i++){
      digits.push(<button onClick={() => updatecalc(i.toString())} key={i}>{i}</button>)
    }
    return digits
  }

  const calculate = () => {
    setcalc(eval(calc).toString())
  }
  const delkey = () => {
    if(calc == ''){
      return;
    }
    const value = calc.slice(0,-1);
    setcalc(value)
  }
  const del = () => {
    setcalc('');
    setresult('');
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{result ? <span>({result})</span> : '' } &nbsp; </span> {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updatecalc('/')}>/</button>
          <button onClick={() => updatecalc('+')}>+</button>
          <button onClick={() => updatecalc('*')}>*</button>
          <button onClick={() => updatecalc('-')}>-</button>
          <button onClick={delkey}>DEL</button>
          <button onClick={del}>C</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updatecalc('0')}>0</button>
          <button onClick={() => updatecalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
