import React, { useEffect, useState } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import {motion} from "framer-motion";

import { ReactComponent as Logo} from "./assets/icons/logo.svg";
import { ReactComponent as WaveSVG} from "./assets/icons/waves.svg";
import { ReactComponent as HatIcon} from "./assets/icons/hat.svg";
import { ReactComponent as BagIcon} from "./assets/icons/bag.svg";
import { ReactComponent as DevIcon} from "./assets/icons/dev.svg";
import { ReactComponent as PhoneIcon} from "./assets/icons/phone.svg";
import { ReactComponent as HTMLIcon} from "./assets/icons/html.svg";
import { ReactComponent as CSSIcon} from "./assets/icons/css.svg";
import { ReactComponent as JSIcon} from "./assets/icons/js.svg";
import { ReactComponent as ReactIcon} from "./assets/icons/react.svg";
import { ReactComponent as GITIcon} from "./assets/icons/git.svg";
import { ReactComponent as PythonIcon} from "./assets/icons/python.svg";
import { ReactComponent as PHPIcon} from "./assets/icons/php.svg";
import { ReactComponent as TailwindIcon} from "./assets/icons/tailwind.svg";
import { ReactComponent as JQueryIcon} from "./assets/icons/jquery.svg";
import { ReactComponent as BootstrapIcon} from "./assets/icons/bootstrap.svg";
import dots from "./assets/icons/dots.svg";

import './App.css';

import Pointer from './components/pointer';
function App() {
  //const [isLoaded, setIsLoaded] = useState(false)
  const scrollRef = React.createRef();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      //el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true
      },
      repeat: "true"
    });
    console.log(scroll);
  }, [])
  return (
    <React.Fragment>
      <Pointer />
      <div className="App" id='App' data-scroll-container data-scroll-section-inview ref={scrollRef}>
        <header id="site-header" data-scroll data-scroll-sticky data-scroll-target="#App">
          <div className="icon">
            <Logo />
          </div>
          <div className="wrapper">
            <div className="box">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <section id='intro'>
            <h1 className="tagline">
              Building products with great aesthetics and 
              <motion.span
              initial={{
                filter: 'hue-rotate(90deg)'
              }}
              animate={{
                filter: 'hue-rotate(0deg)'
              }}
              transition={{
                duration: 5,
                type: "tween"
              }}
              data-content = " seamless experience"
              > seamless experience</motion.span>
            </h1>
            <div className="buttons">
              <div className="btn btn-primary">Download Resume</div>
              <div className="btn btn-secondary">View Projects</div>
            </div>
            <div className="wave"><WaveSVG /></div>
          </section>
          <section id='projects'>
            <header>
              <h2>
                <span>Projects</span>
                <span>
                  <BagIcon />
                </span>
              </h2>
            </header>
            <div className="projects">
              <div className="project">
                <div className="image">
                  <img src="images/space-tourism.png" alt="Space Tourism" />
                  <div className="overlay">
                    <span>Space Tourism</span>
                    <span>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>REACT</p>
                    </span>
                  </div>
                </div>
                <div className="caption">
                  <div className="desc">
                      <h3 className="title">Space Tourism</h3>
                      <p>Case study of documentary website that provides information on outer space.</p>
                  </div>
                  <div className="buttons">
                    <div className="btn btn-primary">View Case study</div>
                    <div className="btn btn-secondary">View Source case</div>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="image">
                  <img src="images/trybrass.png" alt="TryBrass" />
                  <div className="overlay">
                    <span>TryBrass</span>
                    <span>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>REACT</p>
                    </span>
                  </div>
                </div>
                <div className="caption">
                  <div className="desc">
                      <h3 className="title">TryBrass</h3>
                      <p>A copy of a network that provides banking services with the aim of aiding growing businesses.</p>
                  </div>
                  <div className="buttons">
                    <div className="btn btn-primary">View Live site</div>
                    <div className="btn btn-secondary">View Source case</div>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="image">
                  <img src="images/helicarrier.png" alt="Helicarrier" />
                  <div className="overlay">
                    <span>Helicarrier</span>
                    <span>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>REACT</p>
                      <p>AOS</p>
                      <p>CANVA ANIMATION</p>
                    </span>
                  </div>
                </div>
                <div className="caption">
                  <div className="desc">
                      <h3 className="title">Helicarrier</h3>
                      <p>A copy of a network that provides crptocurrency infrastructures for africans.</p>
                  </div>
                  <div className="buttons">
                    <div className="btn btn-primary">View Live site</div>
                    <div className="btn btn-secondary">View Source case</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section
          className="dots"
          style={{
            backgroundImage: `url(${dots})`
          }}
          data-background = {dots}
          // data-section-sticky
          // data-section-target="#container"
          >
          </section> */}
          <section id='skills'>
            <header>
              <h2>
                <span>Skills</span>
                <span>
                  <HatIcon />
                </span>
              </h2>
            </header>
            <div className="wrapper">
              <p>As a front -end developer, i’m always in pursuit of skills that can help develop and make me a well rounded professional</p>
              <div className="skills-container">
                <div className='skill'>
                  <span><HTMLIcon /></span>
                </div>
                <div className='skill'>
                  <span><CSSIcon /></span>
                </div>
                <div className='skill'>
                  <span><JSIcon /></span>
                </div>
                <div className='skill'>
                  <span><ReactIcon /></span>
                </div>
                <div className='skill'>
                  <span><GITIcon /></span>
                </div>
                <div className='skill'>
                  <span><PythonIcon /></span>
                </div>
                <div className='skill'>
                  <span><PHPIcon /></span>
                </div>
                <div className="break"></div>
                <div className='skill'>
                  <span><TailwindIcon /></span>
                </div>
                <div className='skill'>
                  <span><JQueryIcon /></span>
                </div>
                <div className='skill'>
                  <span><BootstrapIcon /></span>
                </div>
              </div>
            </div>
          </section>
          <section id='about'>
            <header>
              <h2>
                <span>About</span>
                <span>
                  <DevIcon />
                </span>
              </h2>
            </header>
            <div className="wrapper">
              <p>My name is Adeola Fadare, and I’m a Front-end Developer. I love creating amazing projects with seamless expeience. I also enjoy working with people to create amazing products. I am currently freelancing at Byte tech services.</p>
              <p>I am currently based in Lagos, Nigeria.</p>
            </div>
          </section>
          <section id='contact'>
            <header>
              <h2>
                <span>Contact</span>
                <span>
                  <PhoneIcon />
                </span>
              </h2>
            </header>
            <div className="wrapper">
              <p>If you’ll like to know  more about my work, rub minds together on a project or collaborate with you on a project , feel free to shoot me an email-fadareadeola@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
