import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    < >
      <Head>
        <title>Translink Map</title>
        <link rel="logo" href="/train.png" />
      </Head>

      <main className={styles.main}>
        <h1>Expo Line Stations Map</h1>
      </main>
        <Map/>

    </>
  )
}
