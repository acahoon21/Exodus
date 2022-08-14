import React from 'react'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import Footer from '../../components/Footer'

//https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250
const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://acegif.com/wp-content/gifs/raining-money-14.gif")] before:bg-cover before:bg:-center before:opacity-30',            
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]',
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

const OnRamp = () => {
    return (
        <TopNavbarLayout>
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            OnRamp
                        </div>
                        <div className={style.description}>
                            Onramp fiat from your bank or card to crypto here! <br /> Works with Ethereum, Binance and Avalanche chains.
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.gameButton}>OnRamp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </TopNavbarLayout>
    )
}

export default OnRamp