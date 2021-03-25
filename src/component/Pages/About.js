import React from 'react';
import bg3 from './bg3.jpg';
import bg4 from './bg4.jpg';

function About() {
    return (
        <div>
            <h1 className="head">Axiom TechGuru Pvt.Ltd</h1>
            <img src={bg3} alt="bg3" className="img2" />

            <p className="para1">
                Axiom TechGuru Pvt. Ltd. is established in year 2003 achieved a fame of reputed organization engages in offering "Internship, Research and software Development". It’s a leading software Research &amp; Development firm in Nagpur proving high end software Research &amp; Development for clients &amp; corporate. Axiom TechGuru Pvt. Ltd. has a team of 50 Employees those who are working on various Domain &amp; Project.
            </p>
            <img src={bg4} alt="bg4" className="img2" />
            
            <p className="para1">
            "Axiom TechGuru Pvt. Ltd." provides software solutions on various Technologies like Java, .Net, Android &amp; PHP. We are dealing into ERP, Web Development, Desktop Applications, and Mobile &amp; IOS Development. With a vision to expand its business in India and Abroad on a large scale, "Axiom TechGuru Pvt. Ltd." is surely one of its own kinds in Central India.
            </p>
        </div>
    );

}
export default About;