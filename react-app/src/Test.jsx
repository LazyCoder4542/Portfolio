import React, { useRef, useState, useEffect } from 'react';

import hoverEffect from "hover-effect";

import Pointer from './components/pointer';
function Test() {
  useEffect(()=>{
    console.log('dsdf')
    var button = new hoverEffect({
      parent: document.querySelector('#image'),
      intensity: .3,
      image1: 'images/space-tourism.png',
      image2: 'null',
      displacementImage: 'images/distortion/3.jpg',
    });
  }, [])
  /*useEffect(()=>{
    Array.from(document.querySelectorAll('.grid__item-img')).forEach((el) => {
      const imgs = Array.from(el.querySelectorAll('img'));
      new hoverEffect({
        parent: el,
        intensity: el.dataset.intensity || undefined,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: el.dataset.displacement
      });
    });
  }, [])*/
  var styles = {
    width: 500,
    height: 400,
    overflow: 'hidden'
  }
  return (
    <React.Fragment>
        <div id='image' style={styles}>
            <p>adiojfsofnosfl</p>
        </div>
    </React.Fragment>
  );
}

export default Test;
