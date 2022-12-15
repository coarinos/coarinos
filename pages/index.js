import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coarinos | Colegios de Alto Rendimiento</title>
        <meta name="description" content="Comunidad de la red Colegios de Alto Rendimiento (COAR) Y Bachillerato Internacional (IBDP).S" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}
