import React,{useState} from 'react';
export default function Radio()
{
    const[rbtn,setrbtn]=useState([])
    const change =event =>{
        const target =event.target;
        const  name=target.name;
        const value =target.value;
        setrbtn({
            
            [name] : value
        })
    }
    return(
        <div>
            <form>
                <label >Male</label>
                <input type="radio" name="gender" value="Male" onChange={change}></input>
                <label >FeMale</label>
                <input type="radio" name="gender" value="FeMale" onChange={change}></input>
                <p>Selected Gender :{rbtn.gender}</p>
            </form>
        </div>
    )
}