import {useState} from 'react';

function Even()
{
    const[fno,setfno]=useState();
    const[lno,setlno]=useState();
    const[a,setA]=useState(0);
    const[s,setS]=useState(0);
    const[m,setM]=useState(0);
    const[d,setD]=useState(0);

    function add()
    {
        setA(fno+lno);
    }
    function sub()
    {
        setS(fno-lno);
    }
    function mul()
    {
        setM(fno*lno);
    }
    function div()
    {
        setD(fno/lno);
    }

    return(
        <div className="App">
            <h1>
            Calculation Of A Number
            </h1>
            <p>Enter First Number Please</p>
        <input type="number" name="fno" value={fno} onChange={e=>setfno(+e.target.value)}></input>
        <p>Enter Second Number Please</p>
        <input type="number" name="lno" value={lno} onChange={e=>setlno(+e.target.value)}></input>
        <br></br><br></br>
        <input type="button" value="Addition" onClick={add}></input> &nbsp;&nbsp;
        <input type="button" value="Substraction" onClick={sub}></input>&nbsp;&nbsp;
        <input type="button" value="Multiplication" onClick={mul}></input>&nbsp;&nbsp;
        <input type="button" value="Division" onClick={div}></input>&nbsp;&nbsp;

        <p>Addition : {a}</p>
        <p>Substraction : {s}</p>
        <p>Multiplication : {m}</p>
        <p>Division : {d}</p>


        
        </div>
    );

}
export default Even;