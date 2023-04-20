import React from 'react'
import "./About.css"
import PersonIcon from '@mui/icons-material/Person';
import { Button, Paper } from '@mui/material';
import Resume from './Resume.pdf'

function About() {
  return (
    <div>
        <div className="AboutN">
        <center>
        <h2 style={{padding:"20px"}}><PersonIcon/> About Me</h2>
        </center>
        <br></br>
        <div>
            <div className="txt">
                <Paper style={{width:"600px",height:"350px",margin:"auto",padding:"30px",fontStyle:"italic"}}>
                <h3>I'm Sibiharan R</h3>
                <h6>Full Stack Developer</h6>
                <br/>
                <p>I am an Ece Undergraduate Student from SKCET. I am very
                    passionate about improving my coding skills & 
                    developing applications & websites</p>
                <br/>
                
                <p style={{color:"blue"}}>Email :</p>
                <p> sibiharanr@gmail.com</p>
                <br/>
                <p style={{color:"blue"}}>Place :</p>
                <p> TamilNadu, India - 636003</p>
                <br/>
                <br/>
                <a href={Resume} download="Resume"><Button variant="contained">Resume &gt;</Button></a>
                </Paper>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
