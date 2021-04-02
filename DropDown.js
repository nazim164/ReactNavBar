import React,{ useState } from 'react';
import jeans from "./jeans.jpg";
import tshirt from "./tshirt.jpg";
import trouser from "./trouser.jpeg";        
import hoodie from "./hoodie.jpg";



export default function DropDown()
{
    const [item , setitem]=useState([{},
        { id: 1 ,name :"Jeans",unitprice :"800"  , img:jeans  },
        { id: 2 ,name :"T-shirt",unitprice :"340"  , img:tshirt},
        { id: 3 ,name :"Trouser",unitprice :"650"  , img:trouser},
        { id: 4 ,name :"Hoodie",unitprice :"600"  , img:hoodie},
       ])

       const[demoitem,setdemoitem]=useState([])
       const[quen,setquen]=useState(1)
       const[dis,setdis]=useState()

       function demo(e)
       {
        setdemoitem(item[+e.target.value])
       }
       return(
           <div className="App">
               <form >
                   <select className="" name="item"onChange={demo} >
                       <option value="#">Choose Item</option>
                   {item.map((item)=>(
                          <option key={item.id}  value={item.id}>{item.name}</option>
                          ))}
                   </select>
               </form>
               <p>Item Name : {demoitem.name}</p>
  <img className='img' src={demoitem.img} alt=""/>
  <p>Item Unit Price : {demoitem.unitprice}/-</p>
  <label htmlFor="text">Please Enter Your Qauntity : </label>
  <input type="text" value={quen} onChange={(e)=>setquen(+e.target.value)} />
  <p>Discount :</p>
  <label>5%</label>
  <input type="radio" checked={dis==="0.05"} name="discount" value="0.05" onChange={(e)=>setdis(e.target.value)}/>
  <label>10%</label>
  <input type="radio"  checked={dis==="0.10"}  name="discount" value="0.10" onChange={(e)=>setdis(e.target.value)}/>
  <label>20%</label>
  <input type="radio"  checked={dis==="0.20"}  name="discount" value="0.20" onChange={(e)=>setdis(e.target.value)}/>
  <p> Total Price Is : {demoitem.unitprice * quen}</p>
  
  <p>Net Price : {demoitem.unitprice * quen-(demoitem.unitprice * quen)*dis}/-</p>

           </div>
       )

}
