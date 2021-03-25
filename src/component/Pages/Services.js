import React from 'react';
import bg6 from './bg6.jpg';
import bg7 from './bg7.png';
import bg9 from './bg9.png';
 
function Services() {
    return(
        <div>
            <h1>Services</h1>
            <img src={bg6} alt="bg6" className="back"/>
            <h2 className="side">Software Application Development</h2>
            <p className="side"> "Axiom TechGuru Pvt. Ltd. offers the best solutions in the industry when it comes to software development. " </p>
            <br></br>
            <img src={bg7} alt="bg7" className="back"/>
            <h2>Mobile Application Development</h2>
          <p>  "We are on a fast track in Research and Development (R&amp;D) which are rapidly emerging in software development in industry.</p>
          <br></br>
          <img src={bg9} alt="bg9" className="back"/>
          <h2>Web Design And Development</h2>
          <p>"Website Designing, Web Applications Development, E – Commerce solutions, Open Source CMS like WordPress, Joomla, Opencart, Magento etc."</p>

        </div>
    );

}
export default Services;