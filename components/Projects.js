import { motion } from "framer-motion";
import styles from "/styles/Projects.module.css"

const Projects = () => {
    return (
      <div className={styles.wrapper}>
        <h1 id="projects" className={styles.title}>
          Projects
        </h1>

        <div className={styles.grid}>
            <motion.a href="" className={styles.card} whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                },
              }}>
              <h3>Bookish App &rarr;</h3>
              <p>Like to read? Me neither. I made an app for books I pretend to read in order to look like a true intellectual.</p>
            </motion.a>

          <motion.a href="https://bloggatsbyproject.gatsbyjs.io/" target="_blank" className={styles.card} className={styles.card} whileHover={{
                scale: 1.1,
                transition: {
                  duration: .2
                },
              }}>
            <h3>Gatsby Blog &rarr;</h3>
            <p>Sometimes I write blog posts, but mostly I have no idea what I am talking about. Fake it until you make it.</p>
          </motion.a>

          <motion.a href="" className={styles.card} className={styles.card} whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              },
            }}>
            <h3>Recipe App &rarr;</h3>
            <p>Uh oh spicy! Pumpkin! Hahahaha. Pumpkin tasty!</p>
          </motion.a>

          <motion.a href="" className={styles.card} className={styles.card} whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              },
            }}>
            <h3>Sith/Jedi Mode &rarr;</h3>
            <p>
              Dark/Light mode site. Fear is the path to the dark site.
            </p>
          </motion.a>
        </div>
      </div>
    );
}

export default Projects;