import styles from '../styles/Skills.module.css'
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3  id="skills">Skills</h3>
        {/* skill 1 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div className={ `${styles.skillFill} ${styles.ninety}`} 
                  initial={{
                    width: `${10}%`,
                  }}
                  animate={{
                    width: `${90}%`,
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}>
                <div className={styles.skillTitle}>
                  CSS
                </div>
              </motion.div>
              <div className={styles.skillPercent}>90%</div>
          </div>
        </div>
        {/* skill 2 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div className={ `${styles.skillFill} ${styles.ninety}`} initial={{
                    width: `${10}%`,
                  }}
                  animate={{
                    width: `${90}%`,
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}>
                <div className={styles.skillTitle}>
                  HTML
                </div>
              </motion.div>
              <div className={styles.skillPercent}>90%</div>
          </div>
        </div>
        {/* skill 3 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div className={ `${styles.skillFill} ${styles.eighty}`} initial={{
                    width: `${10}%`,
                  }}
                  animate={{
                    width: `${80}%`,
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2
                  }}>
                <div className={styles.skillTitle}>
                  JQUERY
                </div>
              </motion.div>
              <div className={styles.skillPercent}>80%</div>
          </div>
        </div>
        {/* skill 4 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div className={ `${styles.skillFill} ${styles.seventyfive}`}
                initial={{
                  width: `${10}%`,
                }}
                animate={{
                  width: `${75}%`,
                }}
                transition={{
                  duration: 3,
                  delay: 0.3,
                  repeatType: "reverse",
                  repeat: Infinity,
                  repeatDelay: 2
                }}>
                <div className={styles.skillTitle}>
                  JS
                </div>
              </motion.div>
              <div className={styles.skillPercent}>75%</div>
          </div>
        </div>
        {/* skill 5 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div className={ `${styles.skillFill} ${styles.thirty}`} 
                initial={{
                  width: `${10}%`,
                }}
                animate={{
                  width: `${30}%`,
                }}
                transition={{
                  duration: 3,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}>
                <div className={styles.skillTitle}>
                  REACT
                </div>
              </motion.div>
              <div className={styles.skillPercent}>30%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;