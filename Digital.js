import React from 'react';
import {useState} from 'react';
function Digital(){

    var [scount,setscount]=useState();
    var [dsum,setdsum]=useState(0);
    function sum()
    {
      while(scount> 0)
      {
    
        setdsum(dsum+=scount%10);
        // dsum=dsum+scount%10;
        // scount= (scount/10);
        scount=Math.floor(scount/10);
      
      }

    }
    

return (
    
    <div className="App">
        
        <p> Please Enter  Number</p>
        <input type="Number" name="scount" value={scount} placeholder="Enter Number" onChange={e=>setscount(+e.target.value)} ></input>
        <br></br><br></br>
        <input type="button" value=" Result" onClick={sum}></input>&nbsp;&nbsp;
        <p>Sum of Digit : {dsum}</p>
   

    </div>
);
}
export default Digital;