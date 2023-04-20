import React from 'react'
import './Work.css'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Paper } from '@mui/material';

function Work() {
  return (
    <div>
        <div className="WorkN">
          <center style={{padding:"20px"}}>
            <h2><DeveloperModeIcon/> Projects Made</h2>
          </center>

<br></br>

          <Paper elevation={24} style={{width:"900px",height:"350px",backgroundColor:"transparent",margin:"auto",padding:"30px"}}>
            <div className="Card">
                <div className="Card-Img"></div>

                <div className="Info">
                    <h2>SLR Systems[Working]</h2>
                    <br/>
                    <p> Sign language recognition System is a technology that uses Cnn to detects
                         hand gestures and movements used in sign language and 
                        translate them into written language.</p>
                    <br/>
                    <button>Read More</button>
                </div>
            </div>
          </Paper>
        </div>
    </div>
  )
}

export default Work
