import Image from 'next/image'
import React from 'react'
import Head from 'next/head'


const style = {
    ignore: `flex h-24 w-full items-center justify-center border-t text-[#fb4848]`
}


const HeadF = () => {
    return (
        <Head>
            <title>FYREFLi</title>
            <link rel="icon" href="/favFyre.png" />
        </Head>
    )
}

export default HeadF