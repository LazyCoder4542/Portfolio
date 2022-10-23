import React, { Component } from "react";
import {motion} from "framer-motion";
import styles from "./pointer.module.css"
import pointer from "../assets/icons/pointer.png"
class Pointer extends Component {
  state = {
    position: { x: 0, y: 0 }
  };
  constructor() {
    super();
    this.pointer = React.createRef();
  }
  componentDidMount() {
	  window.addEventListener("mousemove", (e) => {
	    this.updatePosition(e);
	  });
    window.addEventListener("scroll",(e) => {
      this.setState((prevState) => {
        console.log(prevState);
        return ({
          pointer: {x: 0, y: 0} //(prevState.pointer, {y: window.scrollY}) 
        })
      }
      );
	  });
  }
  updatePosition = (e) => {
    var m = {
      x: null,
      y: null,
    };
    m.x = e.clientX;
    m.y = e.clientY;
    this.setState({
      position: {
        x: m.x ? m.x : 0,
        y: m.y ? m.y : 0,
      }
    })
    //this.pointer.current.style.transform = `translate(${this.state.position.x}px, ${this.state.position.y}px)`
  };
  render() {
    return (
      <React.Fragment>
        <motion.div
        className={styles.pointer}
        ref={this.pointer}
        variants={{
          default: {
            x: this.state.position.x,
            y: this.state.position.y
          }
        }}
        animate="default"
        transition={{ duration: 0.2, damping: 25, type: "spring"}}
        >
          <img src={pointer} alt="pointer" />
        </motion.div>
        {/* <h1>X: {this.state.position.x}</h1>
        <h1>Y: {this.state.position.y}</h1> */}
      </React.Fragment>
    );
  }
}

export default Pointer;
