import React, { useState } from "react";

import "./App.css";
import home from "./home.jpg";
import contact from "./contact.jpg";
import calender from "./calender.jpg";


export default function Radio1() {
   
  
    const [imgs, setimgs] = useState([
      {id:1 , name:"home" , img:home},{ id :2 ,  name:"contact", img:contact},{id :3 , name:"calender",img:calender}
    ]);
    const [disimg,setdisimg]=useState([]);
  
    
    return (
      <div >
        
        <div>
        <label >Home</label>
        <input type="radio"name="radio"  value="0" onChange={(e)=>setdisimg(imgs[+e.target.value])}   />
        <label> Contact</label>
          <input type="radio" name="radio"value="1" onChange={(e)=>setdisimg(imgs[+e.target.value])}  />
          <label> Calender</label>
          <input type="radio"name="radio"  value="2" onChange={(e)=>setdisimg(imgs[+e.target.value])}  /> 
        </div>
        <img className="imgbx" src={disimg.img} alt=""/>
        
        <hr />
      </div>
    );
  }
  
 