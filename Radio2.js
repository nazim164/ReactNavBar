import {useState} from 'react';
export default function Radio2()
{
    const[rbtn,setrbtn]=useState();
    return(
        <div>
          <style>{'body {background-color:'+rbtn+';}'}</style>

        <label>LightPink :</label>
    <input type="radio" checked={rbtn==="LightPink"} value="LightPink" onChange={(e)=>{setrbtn(e.target.value)}}/>
        <label>Grey</label>
        <input type="radio" checked={rbtn==="Grey"} value="Grey" onChange={(e)=>{setrbtn(e.target.value)}}/>
        <label>SkyBlue</label>
        <input type="radio" checked={rbtn==="SkyBlue"} value="SkyBlue" onChange={(e)=>{setrbtn(e.target.value)}}/>
        <br></br><br></br>
        <h1>Selected Radio Button Color :{rbtn}</h1>
        </div>
    );
}
