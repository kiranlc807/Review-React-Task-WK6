import React, { useState } from "react";
import Child from "./Child";

const Parent = ()=>{
    const [inputData,setInputData]=useState('');
    const [update,setUpdate]=useState(false);
    const [data,setUpdateData]=useState('');

    const handleInputData = (data)=>{
        setInputData(data);
    }
    console.log(update);
    return (
        <div style={{backgroundColor:"gray",borderRadius:"5px"}}>
            {update?<p>{data}</p>:<p></p>}
            <h1>Parent</h1>
            <label>
                Enter data:
            </label>
            <input type="text" placeholder="parent input field" value={inputData} onChange={(e)=>{handleInputData(e.target.value)}} />
            <label>
            <Child inputData={inputData} setInputData={(e)=>{setUpdateData(e)}} setUpdate={(e)=>setUpdate(true)}/>
            </label>
            
        </div>
    )
}

export default Parent;