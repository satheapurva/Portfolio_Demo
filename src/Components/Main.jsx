import React from "react";
import './Styles/Main.scss';
import pic from '../assets/pic.jpg';
import { Facebook, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
const Main= () =>{
     return(
        <div className="main">
             <div className="main_container">
                 <div className="main_content">
                    <div className="text">
                        <p>Hello Everyone !</p>
                        <h1> I am Apurva</h1>
                        <p>Front-end Developer & Designer</p>

                        <div className="icons">
                            <Twitter className="icon"/>
                            <Facebook className="icon"/>
                            <Pinterest className="icon"/>
                            <LinkedIn className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>
                    </div>
                 </div>
                          <div className="main_img">
                            <img src={pic} alt=" "/>
                          </div>
             </div>
        </div>
     )
}
export default Main;