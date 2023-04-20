import React  from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Details from './Components/Details/Details'
import Home from './Components/Home/Home'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Work from './Components/Work/Work'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <div style={{backgroundColor:"#000000"}}>
      <Header className="Hoder"/>
      <div className="Container">
          <div className="Left">
            <center>
              <Details/>
            </center>
          </div>
          <div className="Right">
            <div id="home"><Home/></div>
            <div id="about"><About/></div>
            <div id="education"><Education/></div>
            <div id="skills"><Skills/></div>
            <div id="work"><Work/></div>
            <div id="contact"><Contact/></div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App


/*

            <div className="cdot" data-cdot></div>
            <div className="cout" data-cout></div>

  const cDot = document.querySelector("[data-cdot]");
  const cOut = document.querySelector("[data-cout]");

  window.addEventListener("mousemove",function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    cDot.style.left = `${posX}px`;
    cDot.style.top = `${posY}px`;

    cOut.animate({
      left: `${posX}px`,
      top: `${posY}px`
    },{ duration: 1000,fill:"forwards"});
  });


.cdot
{
    width: 5px;
    height: 5px;
    background-color: white;
}
.cout
{
    width: 30px;
    height: 30px;
    border: 2px solid aqua;
}
.cdot,.cout
{
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
}
*/