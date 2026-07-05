import React from "react";
import './Styles/Contact.scss';
import {ArrowBack} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
const Contact=()=>{
    return(
        <div className="contact">
             <Link to= '/'>
             <ArrowBack className="arrow"/>
             </Link>
             <div className="inputs">
                 <h1>Contact Me</h1>
                 <input type="text" placeholder="Name"/>
                 <input type="text" placeholder="Email"/>
                 <input type="text" placeholder="Message" className="msg"/>
                 <Button>Send</Button>
             </div>
        </div>
    )
}
export default Contact;