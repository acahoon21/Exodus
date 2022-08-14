import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//import fyrefliLogo from '../assets/fyrefli.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
//import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
//import Chains from '../Chains'
//import { ConnectButton } from 'web3uikit'
//import Account from './Account/Account'
import ConnectWallet from '../ConnectWallet'

const style = {
    wrapper: 'bg-[#04111d] w-screen px-[1.2rem] py-[0.2rem] flex',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-[#fb4848] font-semibold text-2xl',
    searchBar: 'flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]',
    searchIcon: 'text-[#8a939b] mx-3 font-bold text-lg',
    searchInput: 'h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]',
    headerItems: 'flex items-center justify-end',
    headerItem: 'text-white px-4 font-bold text-[#c8cacd] hover:text-[#fb4848] cursor-pointer',
    headerIcon: 'text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer',
    cheating: 'text-[#04111d] px-4 font-bold text-[#04111d]',
    button: `border border-[#fb4848] bg-[#04111d] p-[0.1rem] text-xl font-semibold rounded-lg cursor-pointer text-[#fb4848]`,
}


const Header2 = () => {
    return <div className={style.wrapper}>
        <div className={style.headerItems}>
            <div className={style.headerIcon}>
                <CgProfile />
            </div>
            <div className={style.cheating}> ...I... </div>
            <Link href='../../currency/wallet'>
                <div className={style.headerItem}> Wallet </div>
            </Link>
            <div className={style.cheating}> .Love. </div>
            <Link href='../../currency/fyreSwap'>
                <div className={style.headerItem}> 🔥FyreSwap🔥 </div>
            </Link>
            <div className={style.cheating}> ..You.. </div>
            <Link href='../../currency/onRamp'>
                <div className={style.headerItem}> OnRamp </div>
            </Link>
            <div className={style.cheating}> Brittany </div>
            <div className={style.button}>
                <ConnectWallet />
            </div>
            <div className={style.headerItem}> Chains </div>
        </div>
    </div>;
}

export default Header2