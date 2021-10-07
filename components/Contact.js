import { motion } from "framer-motion";
import styles from "/styles/Contact.module.css"

const Contact = () => {
    return (
      <div className={styles.wrapper}>
        <h1 id="contact" className={styles.title}>
          Contact
        </h1>

        <div className={styles.grid}>
          contact me. i am not scammer
        </div>
      </div>
    );
}

export default Contact;