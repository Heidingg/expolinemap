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
      <header className={styles.header}>
        <div>
        <Image  src="/translinklogo.png"
alt='logo'
width={100}
height={50}></Image>
        </div>
      </header>
      <main className={styles.main}>
        <h1>Expo Line Stations Map</h1>
        <Map/>
        <div>
          <h1>Expo Line</h1>
          <p>
          The Expo Line operates two routes:
          </p>
          <ul>
          <li>
          Waterfront Station (Downtown Vancouver) to King George Station (Surrey)
          </li>
          <li>Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)</li>
          </ul>
          <p>Transfer to the Millennium Line at the following stations:</p>
          <ul>
            <li>Commercial–Broadway Station</li>
            <li>Lougheed Town Centre Station</li>
            <li>Production Way–University Station</li>
          </ul>
          <p>
          Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
          </p>
          <p>
          Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
<div className={styles.card}>
<Image  src="/translinklogo.png"
alt='logo'
width={100}
height={50}></Image>
<p>Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.</p>
</div>
<div className={styles.card}>
  <h4>Getting Around</h4>
<a>
Transit Fares</a>
<a>Schedules</a>
<a>Rider Info</a>
<a>Transit Alerts</a>
</div>
<div className={styles.card}>
<h4>Resources</h4>
<a>Contact Us</a>
<a>Careers</a>
</div>
<div className={styles.card}>
<h4>Contact Us</h4>
<a>Call us at 604.953.3333</a>
<a>400-287 Nelson's Ct.,
New Westminster,
BC V3L0E7</a>
</div>
      </footer>

    </>
  )
}
