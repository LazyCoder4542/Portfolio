import React, { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import {motion} from "framer-motion";

import { ReactComponent as Logo} from "./assets/icons/logo.svg"
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
              <span>MENU</span>
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
          </section>
          <section data-scroll-section>
            <div className='text' data-scroll>Hello</div>
            <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="5">😬</p>
          </section>
          <section data-scroll-section>
            <div className='text' data-scroll>Hello</div>
          </section>
          <section data-scroll-section>
            <div className='text' data-scroll>Hello</div>
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
