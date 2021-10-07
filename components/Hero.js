import styles from '../styles/Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}>
          <div className={styles.title}>Ariel Adams</div>
          <div className={styles.heading}>Web Developer</div>
          <div className={styles.iconContainer}>
            <div>
              <a href="https://github.com/arielbot" target="_blank" rel="noopener noreferrer"><img src="/images/github-squared.svg" alt="github icon"/></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/ariel-adams-a54852201/" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg"  alt="linkedin icon"/></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    );
}
 
export default Hero;