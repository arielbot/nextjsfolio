import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav>
      <div className={styles.container}>
        
        {/* desktop menu */}
        <div className={ `${styles.wrapper} ${styles.hideMobile}`}>
          <div>
            Portfolio
          </div>
          <div className={styles.linkContainer}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/"><a>Contact</a></Link>
          </div>
        </div>
        
        {/* mobile hamburger menu */}
        <div className={styles.showMobile}>
          <div className={styles.wrapper}>
            <div className={styles.tabName}>
              Portfolio
            </div>
            <button className={styles.hamburgerButton} onClick={handleClick}>
              <svg className={styles.hamLine} fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'/>
              <svg className={styles.hamLine} fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'/>
              <svg className={styles.hamLine} fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'/>
            </button>
          </div>
          <div className={`${styles.linkContainer} ${active ? '' : 'hidden'}`}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/"><a>Contact</a></Link>
          </div>
        </div>
      </div>
      {/* <div className={styles.border}></div> */}
    </nav>
    );
}
 
export default Navbar;