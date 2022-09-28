import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fyrefliLogo from '../../assets/fyrefli.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import DropChains from '../Drop/dropChains'
import DropMkt from '../Drop/dropMkt'
import DropInfo from '../Drop/dropInfo'
import DropSwap from '../Drop/dropSwap'
import DropProfile from '../Drop/dropProfile'


const style = {
    wrapper: 'sticky top-0 z-50 bg-[#04111d] w-screen px-[1.2rem] py-2 flex shadow-xl shadow-cyan-500/50',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-[#fb4848] font-semibold text-2xl',
    searchBar: 'flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]',
    searchIcon: 'text-[#8a939b] mx-3 font-bold text-lg',
    searchInput: 'h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]',
    headerItems: 'flex items-center justify-end',
    headerItem: 'text-white px-4 font-bold hover:text-[#fb4848] border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-lg shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerIcon: 'text-[#8a939b] text-3xl px-4 hover:text-white cursor-pointer',
    cheating: 'text-[#04111d] px-4 font-bold text-[#04111d]',
    button: `border px-1 border-[#fb4848] bg-[#04111d] p-[0.1rem] text-xl font-semibold rounded-lg cursor-pointer text-[#fb4848]`,
}


const Header1 = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                <Image src={fyrefliLogo} height={40} width={40} alt='' />
                <div className={style.logoText}>FYREFLi</div>
            </div>
        </Link>
        <div className={style.searchBar}>
            <div className={style.searchIcon}>
                <AiOutlineSearch/>
            </div>
            <input className={style.searchInput} 
            placeholder="Search items, collections, and accounts"
            />
        </div>
        <div className={style.headerItems}>
                <div className={style.headerItem}> <DropMkt/> </div>
                <div className={style.headerItem}> <DropSwap/> </div>
                <div className={style.headerItem}> <DropInfo/> </div>
            <div className={style.cheating}> . </div>
            <Link href='../../currency/testing'>
                <div className={style.button}> <DropChains/> </div>
            </Link>
            <div className={style.cheating}> . </div>
            <div className={style.headerIcon}> <DropProfile/> </div>
            <Link href='../../general/games'>
                <div className={style.headerItem}> Games </div>
            </Link>
            <div className={style.cheating}> . </div>
        </div>
    </div>;
}

export default Header1