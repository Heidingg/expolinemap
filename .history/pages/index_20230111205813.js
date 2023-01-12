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
      <p onclick="sky()" style="padding:10px;background:skyblue">Translink Expo Line Map</p>
      </main>
        <Map/>

    </>
  )
}
