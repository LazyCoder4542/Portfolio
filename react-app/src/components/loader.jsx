import React from "react";
//import {motion} from "framer-motion";
import styles from "./loader.module.css"

function Loader(props) {
    console.log(props);
    return ( 
        <div className={`${styles.loader} ` + (props.hidden ? styles.loaded : styles.loading)}>
            <div className="container">
                <p>Loading...</p>
            </div>
        </div>
     );
}

export default Loader;