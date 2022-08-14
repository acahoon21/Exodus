//import { useAddress, useMetamask } from '@thirdweb-dev/react'
//import Main from '../components/Home'
import Hero from '../components/Pages/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'


const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white dark:hover:bg-white`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}


/*
export default function Home() {
  
  return <> <Hero/> </>
}
*/
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FYREFLi</title>
        <link rel="icon" href="/favFyre.png" />
      </Head>

      <main>
        <Hero />
        <Footer />
      </main>
    </div>
  )
}

export default Home
