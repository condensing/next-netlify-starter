import Head from 'next/head';
import Image from 'next/image'
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container"> style={{ position: 'relative' }}>
      <Head>
        <title>SW Realty Partners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <Image
          src="public/logo.png"
          alt="Company Logo"
          width={60}
          height={60}
        />
      </header>

      <main>
        <Header title="SW Realty Partners" />
        <p className="description">Website is currently under development</p>
        <p className="description" style={{ fontSize: '0.875rem', opacity: 0.8 }}>Coming ~ 2025</p>
      </main>

      <Footer />
    </div>
  )
}
