import {useState} from 'react';
function Reverse()
{
    var [no,setno]=useState(  );
    var [rno,setrno]=useState(0);
    function Number(){
        while(no>0)
        {
            setrno(rno=rno*10+(no%10));
            no=Math.floor(no/10);
        }
    }
    return(
        <div className="App">
            <p>Enter Number</p>
            <input type="number"name="no" value={no} onChange={e=>setno(+e.target.value)}></input>
            <br></br>         <br></br>         <br></br>         <br></br>
            <input type="button" value="Click Here To Reverse The Number" onClick={Number}></input>
            <p>Reverse Number Is :{rno}</p>
        </div>
    );
}
export default Reverse;