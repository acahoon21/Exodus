//import { useAddress, useMetamask } from '@thirdweb-dev/react'
//import Main from '../components/Home'
import Hero from '../components/Pages/Hero'
//import type { NextPage } from 'next'


const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white dark:hover:bg-white`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const Home = () => {
  return (
    <div>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
