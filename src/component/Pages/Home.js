import React from 'react';
import bg1 from './bg1.jpg';
import bg2 from './bg2.png';

function Home() {
    return (
        <div>
            <h1 className="head">Axiom TechGuru Pvt.Ltd</h1>
            <img src={bg2} alt="bg2" className="img1" />;  
        <img src={bg1} alt="bg1" className="img" />;  
        <p className="para">
        25 Years Experience
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
        </p>  
        </div>

    );

}
export default Home;

