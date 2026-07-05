import React from "react";
import './Styles/Section.scss';
import pic2 from '../assets/pic2.jpg';
 
const Section = ()=>{
    return(
        <div className="sections">
            <div className="sections_container">
                <div className="section_img">
                    <img src={pic2} alt=" "/>
                </div>
            </div>

            <div className="section_content">
                
                <p><b>Experience in frontend and backend development</b></p>
                <p><b>Javascript development</b></p>
                <p><b>Java</b></p>
                <p><b>Python</b></p>
                <p><b>Professional UI and UX designer</b></p>
            </div>
        </div>
    )
}
export default Section;