import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
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
        </div>
    </div>
    );
}
 
export default Hero;