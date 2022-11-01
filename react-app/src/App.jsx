import React, { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
//import {motion} from "framer-motion";

import { ReactComponent as Logo} from "./assets/icons/logo.svg"
import { ReactComponent as WaveSVG} from "./assets/icons/waves.svg"
import { ReactComponent as HatIcon} from "./assets/icons/hat.svg"
import { ReactComponent as BagIcon} from "./assets/icons/bag.svg"

import './App.css';

import Pointer from './components/pointer';
function App() {
  useEffect(() => {
    console.log('hello');
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      tablet: {
        smooth: true,
      },
      smartphone: {
        smooth: true,
      },
      multiplier: 0.8
   });

    console.log(scroll);
  }, [])
  return (
    <React.Fragment>
      <Pointer />
      <div className="App">
        <header id="site-header">
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
        <div className="container" data-scroll-container>
          <section id='intro' data-scroll-section>
            <h1 className="tagline">
              Building products with great aesthetics and <span>seamless</span> <span>experience</span>
            </h1>
            <div className="buttons">
              <div className="btn btn-primary">Download Resume</div>
              <div className="btn btn-secondary">View Projects</div>
            </div>
            <div className="wave"><WaveSVG /></div>
          </section>
          <section id='projects' data-scroll-section>
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
                </div>
                <div className="caption">
                  <div className="desc">
                      <h3 class="title">Space Tourism</h3>
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
                </div>
                <div className="caption">
                  <div className="desc">
                      <h3 class="title">TryBrass</h3>
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
                </div>
                <div className="caption">
                  <div className="desc">
                      <h3 class="title">Helicarrier</h3>
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
          <section id='skills' data-scroll-section>
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
            </div>
          </section>
          <section data-scroll-section>
            <div className='text' data-scroll>Hello</div>
            <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="2">😬</p>
          </section>
          <section data-scroll-section>
            <div className='text' data-scroll>Hello</div>
          </section>
          <section data-scroll-section>
            <div className='text' data-scroll>Hello</div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
