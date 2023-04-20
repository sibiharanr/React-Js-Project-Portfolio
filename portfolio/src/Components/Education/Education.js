import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import './Education.css'
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import Scl from './School.JPG'
import Clg from './College.jpg'

function Education() {
  return (
    <div>
      <div className="EducationN">
        <center>
        <h2 style={{padding:"20px"}}><SchoolIcon/> My Education</h2>
        
        <p style={{padding:"10px"}}>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>

        </center>
<br></br>
      <Paper elevation={24} style={{padding:"20px",width:"600px",margin:"auto"}}>

        <Card>
          <CardActionArea style={{display:"flex"}}>
            <CardMedia>
               <img src={Clg} style={{height:"150px",width:"250px"}} alt="School"/>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="div">Bachelor Of Engineering In ECE</Typography>
              <Typography variant="p" component="div" color="text.secondary">
              Sri Krishna College of Engineering and Technology
              </Typography>
              <Typography variant="h5" component="div" color="green">2021 - 2025 | Pursuing</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

<br/>

        <Card>
          <CardActionArea style={{display:"flex"}}>
            <CardMedia>
               <img src={Scl} style={{height:"150px",width:"250px"}} alt="School"/>
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="div">HSC | Science</Typography>
              <Typography variant="p" component="div" color="text.secondary">
              Sengunthar Matriculation Higher Secondary School | StateBoard
              </Typography>
              <Typography variant="h5" component="div" color="green">2019 - 2021 | Completed</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
      </div>
    </div>
  )
}

export default Education
