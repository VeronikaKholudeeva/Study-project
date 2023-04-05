import React, { useEffect, useState } from 'react';

const Calculator = () => {
    let [value, setValue] = useState('');
    let [result, setResult] = useState(0);
    let [operation, setOperation] = useState('')

    const changeValue = (newValue)=>{
        if (newValue==",")
            setOperation('.');
        else if (!((newValue=="0" || newValue=="00") && (value=='' || operation!='')))
        {
            setValue((prevValue)=> prevValue+operation+newValue);   
            setOperation('');
        } 
    };

    const changeOperation = (newOp) =>{
        setOperation(newOp);
        if (newOp=="="){
            setValue(String(result));
            setOperation('');
        }
        if (newOp=="C"){
            setValue('');
            setOperation('');
        }
        if (newOp=="<="){
            setValue((prevTask)=> prevTask.slice(0, prevTask.length-1));
            setOperation('');
        }
        
    }
    useEffect(()=>
    {
        setResult(eval(value));
    },[value]);

    let numbers=[',','00', 0, ...[...Array(9)].map((_,i)=>i+1)]
    let operations = ['C','+','-','<=','*','/', '=']
    return ( 
    <div className='calculatorMain' >
        <p>calculator</p>
        <div className='resultWindow'><p>{value}</p>
        <p>{result}</p></div>
        <div className='calculator'>
            <div className='num'>{ numbers.reverse().map((elem)=><button className='btn' value={elem} onClick={()=> changeValue(elem)}>{elem}</button>)}</div>
            {operations.map((elem)=><button className='btn opt' value={elem} onClick={()=> changeOperation(elem)}>{elem}</button>)}
       </div>
    </div> );
}
 
export default Calculator;