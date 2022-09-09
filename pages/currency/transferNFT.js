import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'
import Link from 'next/link'
import { ThirdwebSDK } from "@thirdweb-dev/sdk"

const style = {
    title: 'relative flex items-center justify-center text-white text-[40px] font-semibold',
    wrapper: `w-screen flex items-center justify-center mt-14`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl text-white`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#f51111] my-2 rounded-2xl py-5 px-8 text-2xl font-semibold flex items-center justify-center cursor-pointer border border-[#fb4848] hover:border-white`,
    swap: `text-[#fb4848]`,
    switch1: `relative text-lg font-semibold px-10 py-1 bg-black rounded-lg mr-5 text-[#f51111] hover:bg-black hover:text-[#f51111] border border-[#f51111] hover:border-[#f51111] cursor-pointer`,
    switch2: `relative text-lg font-semibold px-8 py-1 bg-black rounded-lg mr-5 text-[#f51111] hover:bg-black hover:text-[#f51111] border border-black hover:border-[#f51111] cursor-pointer`
}

const Wallet = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.title}>
                    Wallet
                </div>
                <div>
                    <br/>
                </div>
                <div className={style.formHeader}>
                    <div className={style.swap}>Transfer</div>
                    <Link href='../../currency/wallet'>
                        <button className={style.switch2}>Crypto</button>
                    </Link>
                    <button className={style.switch1}>NFTs</button>
                    <div>
                        <RiSettings3Fill />
                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type="text"
                        className={style.transferPropInput}
                        placeholder="NFT Token Id"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        onChange={(e) => handleChange(e, 'amount')}
                    />
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type="text"
                        className={style.transferPropInput}
                        placeholder="To Address 0x ..."
                        onChange={(e) => handleChange(e, 'addressTo')}
                    />
                    <div className={style.currencySelector}></div>
                </div>
                <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
                    Confirm
                </div>
            </div>
        </div>
    )
}

export default Wallet