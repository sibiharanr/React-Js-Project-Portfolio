import { Button, Container, IconButton, Paper } from '@mui/material'
import React from 'react'
import Typical from 'react-typical'
import './Home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BrowserRouter } from 'react-router-dom';

function Home() {
  return (
    <div className="HomeN">

      <div>
      <Container fixed className="Back" style={{backgroundColor:"skyblue",padding:"30px"}}>

        <Paper elevation={24} style={{backgroundColor:"transparent",backdropFilter:"blur(5px)",padding:"50px",display:"flex",height:"400px"}}>
      <div className="lft">


        <h2 className="h22">Welcome to My Portfolio</h2>
        <br></br>
        <h2 className="h22">I'm Sibiharan</h2>
        <br></br>
        <p className="h33">Please take a moment to explore my portfolio to see some of my recent achievements and assignments.
           If you have any questions or would like to discuss, 
           please don't hesitate to reach out to me. Thank you for your time and consideration."</p>
        <br></br>





        <div style={{display:"flex"}}>
          <h2 style={{display:"flex"}}>&lt;<h4 className="purple">code</h4>&gt;</h2>
          <h2 style={{paddingRight:"6px"}}>I'm Good in </h2>
          <Typical
            loop={Infinity}
            wrapper="h2"
            steps={[
              'C++',4000,
              'React Js',4000,
              'Html & Css',4000
            ]}
            />
          <h2 style={{display:"flex"}}>&lt;/<h4 className="purple">code</h4>&gt;</h2>
        </div>


<br></br>
<br></br>


      <div className="Btn">
        <BrowserRouter>
        <a href="#about"><Button className="Btn1" variant="contained">Explore Now</Button></a>
        </BrowserRouter>
      </div>

<br></br>
                       <span><IconButton href="https://www.instagram.com/sibi.here/"><InstagramIcon/></IconButton></span>
                       <span><IconButton href="https://www.linkedin.com/in/sibi-haran-586457225"><LinkedInIcon/></IconButton></span>
                       <span><IconButton href="https://t.me/Mrperfectnah"><TwitterIcon/></IconButton></span>
                       <span><IconButton href="https://github.com/sibiharanr"><GitHubIcon/></IconButton></span>



      </div>


        </Paper>
      </Container>
</div>


    </div>
  )
}

export default Home
