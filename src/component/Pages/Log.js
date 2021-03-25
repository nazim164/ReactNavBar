import React from 'react';


function Log() {
    return(
        <div>
              <h1 className="head">Axiom TechGuru Pvt.Ltd</h1>
              <h2 className="high">Log In</h2>
              <form className="form">
                  <div>
                    <label htmlFor="username">Username</label>
                    <br></br>
                    <input type="text" name="username" id="username"/>
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <input type="password" name="password" id="password"/>
                  </div>
                  <br></br>
                  <button type="submit">LogIn</button>
                <br></br><br></br>
                  <a href="/register">New Registration Click Here</a>
              </form>
             
           
        </div>
    );

}
export default Log;