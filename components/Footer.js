import Image from 'next/image'
import React from 'react'
//import fyrefliLogo from '../assets/fyrefli.png'


const style = {
    footer: `flex h-24 w-full items-center justify-center border-t text-[#fb4848]`
}


const Footer = () => {
    return (
        <div className={style.footer}>
        <a
          className="flex items-center justify-center gap-2"
          href="https://fyrefli.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/favFyre.png" alt="FyFi Logo" width={24} height={24} />
          FYREFLi
        </a>
      </div>
    )
}

export default Footer

//<footer className="flex h-24 w-full items-center justify-center border-t text-[#fb4848]">