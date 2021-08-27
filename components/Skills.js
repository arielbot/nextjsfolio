import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3>About</h3>
        <div className={styles.flex}>
          <div className= {styles.bgGray}>
              <div className={ `${styles.skillFill} ${styles.ninety}`}>
                <div className={styles.skillTitle}>
                  CSS
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;