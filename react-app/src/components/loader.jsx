import React from "react";
import { motion} from "framer-motion";
import styles from "./loader.module.css"

function Loader(props) {
    const items = {
        variants: (id) => {
            return {
                hidden: { opacity: 0, rotate: 0 },
                show: { opacity: 1, rotate: (id - 1)*45 }
            }
        },
        transition: (id) => {
            return {
                type: "spring",
                stiffness: 20
            }
        },
    }
    return ( 
        <div className={`${styles.loader} ` + (props.hidden ? styles.loaded : styles.loading)}>
            <div className={styles.container}>
                <div className={styles.spinner}>
                    <motion.div
                    variants={
                        {
                            hidden: { scale: 1, opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                  delayChildren: 2,
                                  delay: 0.5,
                                  //staggerChildren: 0.5,
                                  //repeat: Infinity,
                                }
                              }
                        }
                    }
                    initial="hidden"
                    animate="show"
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 5000
                    }}
                    className={styles.round}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((itm)=> {
                            return <motion.div variants={items.variants(itm)} className={styles.ellipse} key={itm} transition={items.transition(itm)}/>
                        })}
                    </motion.div>
                </div>
                <p>Loading</p>
            </div>
        </div>
     );
}

export default Loader;