import React from 'react'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import Link from 'next/link'

//https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250
const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Captain_Flint_Flag_%28Black_Sails%29.svg/250px-Captain_Flint_Flag_%28Black_Sails%29.svg.png")] before:bg-cover before:bg:-center before:opacity-30 before:blur',
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

const Hero = () => {
    return (
        <TopNavbarLayout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.contentWrapper}>
                        <div className={style.copyContainer}>
                            <div className={style.title}>
                                Discover, collect, and sell next level NFTs
                            </div>
                            <div className={style.description}>
                                FYREFLi ... Pirates here to take back the high seas.
                            </div>
                            <div className={style.ctaContainer}>
                                <Link href='../general/Collection'>
                                    <button className={style.accentedButton}>Explore</button>
                                </Link>
                                <button className={style.button}>Create</button>
                                <button className={style.gameButton}>Play!</button>
                            </div>
                        </div>
                        <div className={style.cardContainer}>
                            <img
                                className="rounded-t-lg"
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Captain_Flint_Flag_%28Black_Sails%29.svg/250px-Captain_Flint_Flag_%28Black_Sails%29.svg.png'
                                alt=""
                            />
                            <div className={style.infoContainer}>
                                <img
                                    className="h-[2.25rem] rounded-full"
                                    src="https://www.fyrefli.io/wp-content/uploads/elementor/thumbs/logo-pnetd4fcdgnrblg324ke3or6dzpat0mz7w6qp3alr4.png"
                                    alt=""
                                />
                                <div className={style.author}>
                                    <div className={style.name}>Jolly Roger</div>
                                    <a
                                        className="text-[#fb4848]"
                                        href="assets source. Min 41 4 help"
                                    >
                                        Captain Flint
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TopNavbarLayout>
    )
}

export default Hero