import React from 'react'
import Link from 'next/link'


const style = {
    wrapper: 'relative h-[170vh]',
    container: 'before:content-[""] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://acegif.com/wp-content/gifs/raining-money-14.gif")] before:bg-cover before:bg:-center before:opacity-30',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-white text-[46px] font-semibold text-center',
    description: 'text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem] text-center',
    ctaContainer: 'flex',
    accentedButton: 'relative text-lg font-semibold px-12 py-4 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] cursor-pointer',
    gameButton: 'relative text-lg font-semibold px-12 py-3 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] border border-black hover:border-white  cursor-pointer',
    button: 'relative text-lg font semibold px-12 py-4 bg-black rounded-lg mr-5 text-[#fb4848] hover:bg-[#4c505c] cursor-pointer',
    cardContainer: 'rounded-[3rem]',
    infoContainer: 'h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white',
    author: 'flex flex-col justify-center ml-4',
    name: '',
    infoIcon: 'flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold',
    yes: `box-shadow: 1px 1px 1px 1px rounded-[2rem] border-2 border-red-600`,
    help: `text-gray-200 text-lg`,
    iframe: `flex justify-center`
}

//<button className = {style.gameButton}><a href="https://widget.onramper.com?color=1d2d50" target="_blank"> OnRamp </a></button> 

const OnRamp = () => {
    return (
        <div className={style.wrapper}>
            
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Ramp
                        </div>
                        <div className={style.description}>
                            OnRamp fiat to crypto or OffRamp crypto to fiat! <br/> Tranfer fiat from your bank or card or vice versa.
                        </div>
                        <div className = {style.iframe}>
                        <iframe
                            src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
                            height="660px"
                            width="482px"
                            title="Onramper widget"
                            frameBorder="0"
                            allow="accelerometer; autoplay; camera; gyroscope; payment"
                            className={style.yes}
                        >
                            Buy crypto
                        </iframe>
                        </div>
                        <div> <br/></div>
                        <div> <br/></div>
                        <div className = {style.help}> If you are having issues click button below for more information and options.</div>
                        <div> <br/></div>
                        <button className = {style.gameButton}><a href="https://widget.onramper.com?color=1d2d50" rel="noreferrer" target="_blank"> OnRamp </a></button>
                    </div>
                </div>
            
        </div>
    )
}
export default OnRamp