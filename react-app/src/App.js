import React, { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";

import './App.css';

import Pointer from './components/pointer';
function App() {
  useEffect(() => {
    console.log('hello');
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
      tablet: {
        smooth: true
      },
      smartphone: {
        smooth: true
      },
   });
    console.log(scroll);
  }, [])
  return (
    <React.Fragment>
      <Pointer />
      <div className="App" data-scroll-container>
        <section data-scroll-section>
          <div className='text' data-scroll data-scroll-delay="20000">Hello</div>
        </section><section data-scroll-section>
          <div className='text' data-scroll>Hello</div>
        </section><section data-scroll-section>
          <div className='text' data-scroll>Hello</div>
        </section><section data-scroll-section>
          <div className='text' data-scroll>Hello</div>
        </section><section data-scroll-section>
          <div className='text' data-scroll>Hello</div>
        </section><section data-scroll-section>
          <div className='text' data-scroll>Hello</div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
