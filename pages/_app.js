import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import Head from 'next/head'
import Header1 from '../components/Header/Header1'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Goerli}
      chainRpc = {{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/d7173bfd0cfc4f2fa366bbe94f78a8df'
      }}
    >
        <Head>
          <title>FYREFLi</title>
          <link rel="icon" href="/favFyre.png" />
        </Head>
        <Header1 />
        
        <Component {...pageProps} />
        <Footer />
    </ThirdwebProvider>
  )
}

export default MyApp
