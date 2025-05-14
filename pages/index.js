import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SW Realty Partners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/logo.png" alt="Logo" className="corner-logo" />

      <main>
        <Header title="SW Realty Partners" />
        <p className="description">Website is currently under development</p>
        <p className="description" style={{ fontSize: '0.875rem', opacity: 0.8 }}>Coming ~ 2025</p>
      </main>

      <Footer />
    </div>
  )
}
