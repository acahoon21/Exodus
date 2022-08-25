import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")] before:bg-cover before:bg:-center before:opacity-20',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-white container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]',
    ctaContainer: 'flex',
    accentedButton: 'relative text-lg font-semibold px-12 py-4 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] cursor-pointer',
    gameButton: 'relative text-lg font-semibold px-12 py-4 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] cursor-pointer',
    button: 'relative text-lg font semibold px-12 py-4 bg-black rounded-lg mr-5 text-[#fb4848] hover:bg-[#4c505c] cursor-pointer',
    cardContainer: 'rounded-[3rem]',
    infoContainer: 'h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white',
    author: 'flex flex-col justify-center ml-4',
    name: '',
    infoIcon: 'flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold'
}

const Education = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Blockchain education
                        </div>
                        <div className={style.description}>
                            Blockchain technology is similar to a server. Except that it is decentralized. No singular entity is in total control of it.
                        </div>
                        <div className={style.title}>
                            Ethereum
                        </div>
                        <div className={style.description}>
                            Ethereum or ETH for short is the largest blockchain that code can be executed on. These are called smart contracts.
                        </div>
                        <div className={style.title}>
                            NFT ... Non-Fungible Token
                        </div>
                        <div className={style.description}>
                            An NFT is a piece of code on the blockchain that cannot be changed. It can only be transferred. This is a great way to track ownership or entitlements.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education