import { Button, InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react'
import './Contact.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

function Contact() {
  return (
    <div>
        <div className="ContactN">
        <div style={{padding:"20px",marginLeft:"370px",fontSize:"1.5rem"}}>
          <h2><HeadsetMicIcon/>Get In Touch</h2>
        </div>
        <div style={{padding:"20px"}}>
            <Paper elevation={24} style={{backgroundColor:"#C4DCDF",fontStyle:"italic",padding:"30px",width:"600px",marginLeft:"150px"}}>
            <form style={{display:"grid"}}>

            <center style={{padding:"30px"}}>    
            
                <TextField  style={{width:"450px",paddingBottom:"10px"}} color="warning" variant="outlined" label="Name" placeholder="Name" type="text"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <PersonIcon/>
                    </InputAdornment>
                    ),
                }}
                />



                <TextField style={{width:"450px",paddingBottom:"10px"}} color="warning" variant="outlined" label="Email" placeholder="Email" type="email"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon/>
                    </InputAdornment>
                    ),
                }}
                />



                <TextField style={{width:"450px",paddingBottom:"10px"}} color="warning" variant="outlined" label="Phone" placeholder="Phone" type="tel"
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <PhoneIcon/>
                    </InputAdornment>
                    ),
                }}
                />


                <TextField style={{width:"450px",paddingBottom:"5px"}} color="warning" variant="outlined" label="Message" placeholder="Message" type="text"
                multiline
                required
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <MessageIcon/>
                    </InputAdornment>
                    ),
                }}
                />

            </center>

                <Button variant="contained" style={{width:"200px",marginLeft:"300px"}} type="submit">Submit</Button>
            </form>
            </Paper>
        </div>
        </div>
    </div>
  )
}

export default Contact
