import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    < >
      <Head>
        <title>Translink</title>
        <link rel="logo" href="/train.png" />
      </Head>

      <main className={styles.main}>
      Expo Line Map{ document.body.style.background = ""}
      </main>
        <Map/>

    </>
  )
}
