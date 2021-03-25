import React from 'react';


function Register() {
    return(
        <div>
              <h1 className="head">Axiom TechGuru Pvt.Ltd</h1>
              <h2 className="high">Register Here</h2>
              <form className="form">
                  <div>
                    <label htmlFor="firstname">FirstName</label>
                    <br></br>
                    <input type="text" name="firstname" id="firstname"/>
                  </div>

                  <div>
                    <label htmlFor="lastname">LastName</label>
                    <br></br>
                    <input type="text" name="lastname" id="lastname"/>
                  </div>
                  <div>



                    <label htmlFor="email">Email </label>
                    <br></br>
                    <input type="mail" name="email" id="email"/>
                  </div>
                    <div>
                  <label htmlFor="phno">Ph.No </label>
                    <br></br>
                    <input type="number" name="phno" id="phno"/>
                  </div>

                 {/* <div>
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" name="password" id="password"/>
                  </div> */}
                  <br></br>
                  <button type="submit">Submit</button>
                <br></br><br></br>
                  {/* <a href="">New Registration Click Here</a> */}
              </form>
             
           
        </div>
    );

}
export default Register;