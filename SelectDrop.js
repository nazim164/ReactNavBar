import React,{ useState } from 'react';


import './App.css';
// import Home from './component/Home';
import pen from "./pen.jpg";
import book from "./book.jpg";
import bag from "./bag.jpg";        
import pencil from "./pencil.jpg";
import scale from "./scale.jpg";

function SelectDrop() {
  const [items , setitems]=useState([{},
    { id: 1 ,name :"pen" ,    unitprice :"40"  , img:pen  },
    { id: 2 ,name :"book" ,   unitprice :"100"  , img:book},
    { id: 3 ,name :"bag" ,    unitprice :"800"  , img:bag},
    { id: 4 ,name :"pencil" , unitprice :"10"  , img:pencil},
    { id: 5 ,name :"scale" ,  unitprice :"5", img:scale },
   

  ])
  const [singleitem , setsingleitem]=useState([])
  const [qty , setqty]=useState(1)


  function onoption(e){
    
    setsingleitem(items[+e.target.value])
  }
  return (
    <div className="App" >
  <form>
    <select className="qty" name="items"  onChange={onoption}>
     {items.map((item)=>(
         <option key={item.id}  value={item.id}>{item.name}</option>
       ))}

    </select>
  </form>
  <p>NAME OF ITEM : {singleitem.name}</p>
  <img className='imgbx' src={singleitem.img} alt=""/>
  <p>UNIT PRICE OF ITEM : {singleitem.unitprice}/-</p>
  <label htmlFor="text">ENTER quantity : </label>
  <input className="qty" type="text" value={qty} onChange={(e)=>setqty(+e.target.value)} />
  <p> TOTAL price : {singleitem.unitprice * qty}</p>
  <p> YOU GOT DISCOUT OF 5% :- {(singleitem.unitprice * qty)*.05}/-</p>
  <p>NET PRICE IS : {singleitem.unitprice * qty-(singleitem.unitprice * qty)*.05}/-</p>

  
    </div>
  );
}

export default SelectDrop;