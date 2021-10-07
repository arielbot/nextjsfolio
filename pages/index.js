import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ariel Adams || Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
