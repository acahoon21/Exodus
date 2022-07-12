import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Goerli} 
      chainRpc = {{
        [ChainId.Goerli]:'https://goerli.infura.io/v3/d7173bfd0cfc4f2fa366bbe94f78a8df'
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
