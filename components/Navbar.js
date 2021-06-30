import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className="logo">
          Portfolio
        </div>
        <div className={styles.linkContainer}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/"><a>Contact</a></Link>
        </div>
      </div>
    </nav>
    );
}
 
export default Navbar;