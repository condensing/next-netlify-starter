import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SWRP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SW Realty Partners" />
        <p className="description">
          Website is currently under development <code>SWRP</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
