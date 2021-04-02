import {useState} from 'react';
import {useForm} from 'react-hook-form';
export default function Checkbox() {
    const {register,handleSubmit}=useForm() 
    const[rbtn,setrbnt]=useState({games:"Not Selected"})
    const[check,setcheck]=useState();
    const onSubmit=(data)=>{
    
        setrbnt(data)               

    }
    function Checked(e){
        if(e.target.checked===true)
        {
            setcheck(true)
        }
        else if(e.target.checked===false)
        {
            setcheck(false)
        }
      
    }
  

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Select Checkbox</h1>
                <label>Select All</label>
                <input type="checkbox" value="0" name="games"onChange={Checked}></input>
             <br></br><br></br>
                <label>Cricket</label>  
                <input type="checkbox" value="Cricket" checked={check} name="games" ref={register} onClick={setcheck ? true:false}></input><br></br><br></br>
                <label>FootBall</label>
                <input type="checkbox" value="FootBall"checked={check} name="games" ref={register} onClick={setcheck ? true:false}></input><br></br><br></br>
                <label>Hockey </label>
                <input type="checkbox"value="Hockey" checked={check} name="games" ref={register} onClick={setcheck ? true:false}></input><br></br><br></br>
                <label>BacketBall</label>
                <input type="checkbox"value="BacketBall"checked={check} name="games" ref={register} onClick={setcheck ? true:false}></input><br></br><br></br>
                <br></br><br></br>
                <button type='submit'>Click Here</button>
            </form>
            <p>Games :{rbtn.games+","} </p>
        </div>
    )
}




