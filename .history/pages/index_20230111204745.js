import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

export default function Home() {
  return (
    < >
      <Head>
        <title>Translink Vancouver</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="logo" href="/train.png" />
      </Head>

      <main className={styles.main}>
        <h2 style={{fontSize:'50px'}}>Expo Line Stations Map</h2>
      </main>
        <Map/>

    </>
  )
}