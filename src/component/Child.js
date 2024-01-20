import React, { useState } from "react";

const Child = ({inputData,setInputData,setUpdate})=>{
    const [displayData,setDisplayData] = useState('');
    const [showData,setShowData] = useState(false);
    const [update, setupdateData]=useState('');

    const handalShowClick = ()=>{
        setDisplayData(inputData);
        setShowData(true);
    }

    const handleHideClick=()=>{
        setShowData(false);
        setUpdate(false);
    }

    const handleUpdate = ()=>{
        setInputData(update)
        setUpdate(true);
    }

    const handleInputData=(data)=>{
        setupdateData(data);
    }

    return (
        <div style={{backgroundColor:"gray",borderRadius:"5px"}}>
            <h1>Child</h1>
            <label>
                Enter data:
            </label>
            <input type="text" placeholder="child input field"  onChange={(e)=>{handleInputData(e.target.value)}} />
            <br></br>
            <br></br>
            <button onClick={handalShowClick}>Show</button>
            <button onClick={handleHideClick}>Hide</button>
            <button onClick={handleUpdate}>Update</button>
            
            {/* <label>
                Enter data:
            </label>
            <input type="text"  onChange={(e)=>{handleInputData(e.target.value)}} /> */}
            {showData&&<p>{displayData}</p>}
        </div>
    )
}

export default Child;