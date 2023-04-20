import React from 'react'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Card, CardMedia, Paper } from '@mui/material';
import './Skills.css'
import Html from './Html.png'
import Css from './Css.png'
import Javascript from './Javascript.png'
import Reat from './React.png'
import C from './C++.png'
import Sql from './MySql.png'
import Github from './Github.png'
import Word from './Word.png'
import Presenation from './Presentation.png'
import Unreal from './Unreal.png'

function Skills() {
  return (
    <div>
        <div className="SkillsN">
        <center>
        <h2 style={{padding:"20px"}}><IntegrationInstructionsIcon/> Skills & Abilities</h2>
        </center>
        <br></br>
        <Paper elevation={24} style={{padding:"20px",width:"600px",margin:"auto",backgroundColor:"transparent",backdropFilter:"blur(5px"}}>

            <Card style={{backgroundColor:"transparent"}}>

                <div style={{display:"flex",padding:"20px"}}>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Html} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}></img>
                    <h3 style={{marginLeft:"23px"}}>Html</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Css} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"28px"}}>Css</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Javascript} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"2px"}}>Javascript</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Reat} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"20px"}}>React</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={C} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"25px"}}>C++</h3>
                </CardMedia>
                </div>
                <div style={{display:"flex",padding:"20px"}}>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Sql} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"17px"}}>Mysql</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Github} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"15px"}}>Github</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Word} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"20px"}}>Word</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px"}}>
                    <img src={Presenation} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"-9px"}}>Presentation</h3>
                </CardMedia>
                <CardMedia style={{padding:"10px",marginLeft:"-11px"}}>
                    <img src={Unreal} alt="" style={{height:"50px",width:"50px",padding:"20px",backgroundColor:"mediumorchid",
                    borderRadius:"1em"}}/>
                    <h3 style={{marginLeft:"10px"}}>Unreal</h3>
                </CardMedia>
                </div>
            </Card>
        </Paper>
        </div>
    </div>
  )
}

export default Skills
