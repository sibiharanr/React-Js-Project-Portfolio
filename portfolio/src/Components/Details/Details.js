import { Avatar, Divider , IconButton, Paper } from '@mui/material'
import React from 'react'
import './Details.css'
import Avataar from './Avataar.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Details() {
  return (
    <div className="DataBox">
        <Paper elevation={5} style={{backgroundColor:"#1D1B26",padding:"20px"}}>
            <Avatar
            alt="Remy Sharp"
            src={Avataar}
            sx={{ width: 100, height: 100 }}/>
            <h2 style={{color:"#FFF"}}>Sibiharan R</h2>
            <p style={{color:"#FFF"}}>Web Developer</p>
            <p style={{color:"#FFF"}}>Student</p>
        </Paper><Divider/>
        <Paper elevation={5} style={{backgroundColor:"#1D1B26",padding:"20px"}}>



            <table>
                <td style={{padding:"10px"}}>
                    <tr style={{color:"#FFF"}}>
                        <h4>Residence:</h4>
                        <h4>City:</h4>
                        <h4>Age:</h4>
                    </tr>
                </td>
                <td style={{paddingLeft:"50px"}}>
                    <tr style={{color:"#70E7D1"}}>
                        <h4>India</h4>
                        <h4>Salem</h4>
                        <h4>18</h4>
                    </tr>
                </td>
            </table>




            <Divider variant="middle"/>
            
            
            <table>
                <br/>
                <tr>
                    <td style={{color:"#70E7D1"}}>
                        <h4>React Js</h4>
                    </td>
                    <td>
                        <p style={{marginLeft:"100px",color:"#FFF"}}>65%</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr></tr>
                <tr></tr>
                <tr>
                    <td style={{display:"flex"}}>
                        <div className="fill" style={{width:"130px"}}></div>
                        <div className="nofill" style={{width:"70px"}}></div>
                    </td>
                </tr>
            </table>
            
            
            



            <table>
                <br/>
                <tr>
                    <td style={{color:"#70E7D1"}}>
                        <h4>HTML</h4>
                    </td>
                    <td>
                        <p style={{marginLeft:"130px",color:"#FFF"}}>80%</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr></tr>
                <tr></tr>
                <tr>
                    <td style={{display:"flex"}}>
                        <div className="fill" style={{width:"160px"}}></div>
                        <div className="nofill" style={{width:"40px"}}></div>
                    </td>
                </tr>
            </table>



            <table>
                <br/>
                <tr>
                    <td style={{color:"#70E7D1"}}>
                        <h4>CSS</h4>
                    </td>
                    <td>
                        <p style={{marginLeft:"140px",color:"#FFF"}}>80%</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr></tr>
                <tr></tr>
                <tr>
                    <td style={{display:"flex"}}>
                        <div className="fill" style={{width:"160px"}}></div>
                        <div className="nofill" style={{width:"40px"}}></div>
                    </td>
                </tr>
            </table>



            <table>
                <br/>
                <tr>
                    <td style={{color:"#70E7D1"}}>
                        <h4>JavaScript</h4>
                    </td>
                    <td>
                        <p style={{marginLeft:"90px",color:"#FFF"}}>30%</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr></tr>
                <tr></tr>
                <tr>
                    <td style={{display:"flex"}}>
                        <div className="fill" style={{width:"60px"}}></div>
                        <div className="nofill" style={{width:"140px"}}></div>
                    </td>
                </tr>
            </table>




            <table>
                <br/>
                <tr>
                    <td style={{color:"#70E7D1"}}>
                        <h4>C++</h4>
                    </td>
                    <td>
                        <p style={{marginLeft:"140px",color:"#FFF"}}>70%</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr></tr>
                <tr></tr>
                <tr>
                    <td style={{display:"flex"}}>
                        <div className="fill" style={{width:"140px"}}></div>
                        <div className="nofill" style={{width:"60px"}}></div>
                    </td>
                </tr>
            </table>





            <table>
                <br/>
                <tr>
                    <td style={{color:"#70E7D1"}}>
                        <h4>MySql</h4>
                    </td>
                    <td>
                        <p style={{marginLeft:"120px",color:"#FFF"}}>70%</p>
                    </td>
                </tr>
            </table>
            <table>
                <tr></tr>
                <tr></tr>
                <tr>
                    <td style={{display:"flex"}}>
                        <div className="fill" style={{width:"140px"}}></div>
                        <div className="nofill" style={{width:"60px"}}></div>
                    </td>
                </tr>
            </table>




            <table>
                <br/>
                <br/>
                <tr>
                    <td style={{display:"flex"}}>
                    <span><IconButton href="https://www.instagram.com/sibi.here/"><InstagramIcon/></IconButton></span>
                       <span><IconButton href="https://www.linkedin.com/in/sibi-haran-586457225"><LinkedInIcon/></IconButton></span>
                       <span><IconButton href="https://t.me/Mrperfectnah"><TwitterIcon/></IconButton></span>
                       <span><IconButton href="https://github.com/sibiharanr"><GitHubIcon/></IconButton></span>
                    </td>
                </tr>
            </table>
        </Paper>
    </div>
  )
}

export default Details

