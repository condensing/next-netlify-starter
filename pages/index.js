import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my SW Realty Partners" />
        <p className="description">
          Website is currently under development <code>- SW Realty Team</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
