import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
//import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion";
import hoverEffect from "hover-effect";
import { gsap } from 'gsap';

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
import { ReactComponent as WorldIcon} from "./assets/icons/world.svg";
import { ReactComponent as GithubIcon} from "./assets/icons/github.svg";
import { ReactComponent as TwitterIcon} from "./assets/icons/twitter.svg";
import { ReactComponent as LinkedinIcon} from "./assets/icons/linkedin.svg";
import { ReactComponent as InstagramIcon} from "./assets/icons/instagram.svg";
import dots from "./assets/icons/dots.svg";

import './App.css';

import Pointer from './components/pointer';
import Loader from './components/loader';
function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [scroll, setScroll] = useState()
  const [currentSection, setCurrentSection] = useState(null)
  const ref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const comp = useRef()
  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);
  useLayoutEffect(() => {
    let ctx = gsap.context(()=> {
      const preloaderTL = gsap.timeline();
      preloaderTL.to('#logo', {yPercent: -20, opacity: 0, delay: 4})
      preloaderTL.to('.preloader', {transform: 'scaleY(0)', transformOrigin: 'top', delay: '-=3'})
    }, comp)
    return () => ctx.revert();
  }, [])
  useEffect(()=>{
    Array.from(document.querySelectorAll('.project')).forEach((e) => {
      const el = e.querySelector('.image').querySelector('picture')
      const child = Array.from(el.children);
      new hoverEffect({
        parent: el,
        intensity: el.dataset.intensity || undefined,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        image1: child[0].getAttribute('src'),
        image2: child[1].getAttribute('src'),
        displacementImage: el.dataset.displacement,
        imagesRatio: 647 / 1014
      });
    });
    var imagesLoaded = require('imagesloaded');
    var imgLoad = imagesLoaded( '.App', function() {
      //console.log("loaded");
      setTimeout(() => {
        setIsPageLoaded(true)
      }, 10000);
    });
    imgLoad.on('progress', function( instance, image ) {
      //var result = image.isLoaded ? 'loaded' : 'broken';
      //console.log( 'image is ' + result + ' for ' + image.img.src );
    });
    console.log("re-init")
    setScroll(new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'), smooth: true}))
  }, [])
  useEffect(()=>{
    console.log("scroll set")
    if (isPageLoaded) {
      scroll.scrollTo('top')
      scroll.on('scroll', (args) => {
        // Get all current elements : args.currentElements
        let sections = ['home', 'projects', 'skills', 'about', 'contact']
        sections.forEach((itm)=>{
          if(typeof args.currentElements[itm] === 'object') {
            // args.currentElements[itm];
            setCurrentSection(itm)
          }
        })
    });
    }
  }, [scroll, isPageLoaded])
  return (
    <main ref={comp}>
      <Loader hidden={isPageLoaded}/>
      <Pointer />
      <div className={`App ${isMenuOpen ? "menu_open" : ''}`} id='App' data-scroll-container data-scroll-section-inview ref={ref}>
        <header id="site-header" data-scroll data-scroll-sticky data-scroll-target="#App" data-scroll-repeat>
          <div className="icon">
            <Logo />
          </div>
          <motion.div
          className="wrapper"
          >
            <div className="box">
              <div
              className="hamburger"
              onClick={()=>{
                setIsMenuOpen(!isMenuOpen)
              }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className='menu'>
              <ul>
                {
                  ['home', 'projects', 'skills', 'about', 'contact'].map((itm, key) =>
                  <li key={key}
                  className={(itm === currentSection ? "active" : "") + " box"}
                  onClick = { ()=> {
                    setIsMenuOpen(false)
                    setTimeout(() => {
                      if (itm === "home") {
                        scroll.scrollTo("top")
                      }
                      else {
                        scroll.scrollTo(document.querySelector(`[data-scroll-id="${itm}"]`))
                      }
                    }, 100);
                  }}
                  >
                    {itm.charAt(0).toUpperCase() + itm.slice(1)}
                  </li>)
                }
              </ul>
            </div>
          </motion.div>
        </header>
        <div className="container" id='container'>
          <section id='intro' data-scroll data-scroll-position="top" data-scroll-id="home" data-scroll-repeat data-scroll-offset="0% 50%">

            <h1 className="tagline">
              Building products with great aesthetics and

              <div class="text-container">
                <video autoPlay playsInline muted loop preload ref={vidRef}>
                  <source src="/assets/gradient.mp4"  type="video/mp4" />
                </video>
                <svg viewBox="0 0 350 85" fill='#10101A'>
                <defs>
                  <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect fill='#fff' id="overlay" x="0" y="0" width="100%" height="100%" />
                    <text id="text" x="0" y="0" fontSize={32} dy="60%" >seamless experience</text>
                  </mask>
                </defs>
                <rect id="r" x="0" y="0" width="100%" height="100%" mask='url(#mask)' />
               </svg>
                <span>seamless experience</span>
              </div>
            </h1>
            <div className="buttons">
              <a href="assets/Resume.pdf" target={'_blank'} rel={"noreferrer"}>
                <div className="btn btn-primary">View Resume</div>
              </a>
              <a href="https://www.github.com/LazyCoder4542?tab=repositories" target={'_blank'} rel={"noreferrer"}>
                <div className="btn btn-secondary">View Projects</div>
              </a>
            </div>
            <div className="wave"><WaveSVG /></div>
          </section>
          <section id='projects' data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-id="projects">
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
                  <picture data-displacement="images/distortion/1.jpg" data-intensity=".25">
                    <img hidden src="images/kanban.png" alt="Kanban" />
                    <img hidden src="images/kanban3.png" alt="Kanban" />
                  </picture>
                  <div className="overlay">
                    <span>Kanban</span>
                    <span>
                      <p>HTML</p>
                      <p>SASS</p>
                      <p>TYPESCRIPT</p>
                    </span>
                  </div>
                </div>
                <div className="caption">
                  <div className="desc">
                      <h4 className="title">Kanban</h4>
                      <p>Task Management App</p>
                  </div>
                  <div className="buttons">
                    <a href="https://kanban-tasks-app.netlify.app/" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-primary">View Case study</div>
                    </a>
                    <a href="https://github.com/LazyCoder4542/Kanban" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-secondary">View Source case</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="image">
                  <picture data-displacement="images/distortion/1.jpg" data-intensity=".25">
                    <img hidden src="images/space-tourism.png" alt="Space Tourism" />
                    <img hidden src="images/space_tourism3.png" alt="Space Tourism" />
                  </picture>
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
                      <h4 className="title">Space Tourism</h4>
                      <p>Case study of documentary website that provides information on outer space.</p>
                  </div>
                  <div className="buttons">
                    <a href="https://space-tourism-by-lazycoder.netlify.app/" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-primary">View Case study</div>
                    </a>
                    <a href="https://github.com/LazyCoder4542/Space-tourism" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-secondary">View Source case</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="image">
                  <picture data-displacement="images/distortion/2.jpg" data-intensity=".25">
                    <img hidden src="images/trybrass.png" alt="TryBrass" />
                    <img hidden src="images/trybrass3.png" alt="TryBrass" />
                  </picture>
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
                      <h4 className="title">TryBrass</h4>
                      <p>A copy of a network that provides banking services with the aim of aiding growing businesses.</p>
                  </div>
                  <div className="buttons">
                    <a href="https://trybrass.netlify.app/" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-primary">View Live site</div>
                    </a>
                    <a href="https://www.github.com/LazyCoder4542/Trybrass" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-secondary">View Source case</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project">
                <div className="image">
                  <picture data-displacement="images/distortion/2.jpg" data-intensity=".25">
                    <img hidden src="images/helicarrier.png" alt="Helicarrier" />
                    <img hidden src="images/helicarrier3.png" alt="Helicarrier" />
                  </picture>
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
                      <h4 className="title">Helicarrier</h4>
                      <p>A copy of a network that provides crptocurrency infrastructures for africans.</p>
                  </div>
                  <div className="buttons">
                    <a href="https://helicarrier-page.netlify.app/" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-primary">View Live site</div>
                    </a>
                    <a href="https://www.github.com/LazyCoder4542/Helicarrier" target={'_blank'} rel={"noreferrer"}>
                      <div className="btn btn-secondary">View Source case</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
          className="dots"
          style={{
            backgroundImage: `url(${dots})`
          }}
          >
          </section>
          <section id='skills' data-scroll data-scroll-position="top" data-scroll-id="skills" data-scroll-repeat>
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
          <section id='about' data-scroll data-scroll-position="top" data-scroll-id="about">
            <header>
              <h2>
                <span>About</span>
                <span>
                  <DevIcon />
                </span>
              </h2>
            </header>
            <div className="wrapper">
              <div className="profile">
                <img src="/images/new_image.jpg" alt="Adeola Fadare" />
              </div>
              <div>
                <p>My name is Adeola Fadare, and I’m a Front-end Developer. I love creating amazing projects with seamless expeience. I also enjoy working with people to create amazing products. I am currently freelancing at Byte tech services.</p>
                <p>I am currently based in Lagos, Nigeria.</p>
              </div>
            </div>
          </section>
          <section id='contact' data-scroll data-scroll-position="top" data-scroll-id="contact">
            <header>
              <h2>
                <span>Contact</span>
                <span>
                  <PhoneIcon />
                </span>
              </h2>
            </header>
            <div className="wrapper">
              <p>If you’ll like to know  more about my work, rub minds together on a project or collaborate with you on a project, feel free to shoot me an email &mdash; <span>adeolafadare8@gmail.com</span></p>
              <div className="socials">
                <h4>You can also connect with me on socials
                  <span><WorldIcon /></span>
                </h4>
                <div>
                  <a href="https://github.com/LazyCoder4542/">
                  <span>
                    <span>GITHUB</span>
                    <span><GithubIcon /></span>
                  </span>
                  </a>
                  <a href="https://twitter.com/MathFreak6">
                    <span>
                      <span>TWITTER</span>
                      <span><TwitterIcon /></span>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/adeolafadare">
                    <span>
                      <span>LINKEDIN</span>
                      <span><LinkedinIcon /></span>
                    </span>
                  </a>
                  <a href="https://www.instagram.com/math_freak01/">
                    <span>
                      <span>INSTAGRAM</span>
                      <span><InstagramIcon /></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
