import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'

const style = {
    title: 'relative flex items-center justify-center text-white text-[40px] font-semibold',
    wrapper: `w-screen flex items-center justify-center mt-14`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-2 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl text-white`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#f51111] my-2 rounded-2xl py-5 px-8 text-2xl font-semibold flex items-center justify-center cursor-pointer border border-[#fb4848] hover:border-white`,
    swap: `text-[#fb4848]`,
    ctaContainer: 'flex',
    gameButton: 'relative text-lg font-semibold px-12 py-4 bg-[#f51111] rounded-lg mr-5 text-black hover:bg-[#fb4848] cursor-pointer',
}

const FyreSwap = () => {
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div className={style.title}>
                    Upload your NFT!
                    </div>
                    <div><br/></div>
                    <div><br/></div>
                    <div className={style.formHeader}>
                        <div className={style.ctaContainer}>
                            <button className={style.gameButton}>Direct Listing</button>
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.gameButton}>Auction Listing</button>
                        </div>
                    </div>
                    <div className={style.transferPropContainer}>
                        <input
                            type="text"
                            className={style.transferPropInput}
                            placeholder="NFT Contract Address"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            onChange={(e) => handleChange(e, 'amount')}
                        />
                    </div>
                    <div className={style.transferPropContainer}>
                        <input
                            type="text"
                            className={style.transferPropInput}
                            placeholder="Token ID"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            onChange={(e) => handleChange(e, 'amount')}
                        />
                    </div>
                    <div className={style.transferPropContainer}>
                        <input
                            type="text"
                            className={style.transferPropInput}
                            placeholder="Sale Price"
                            pattern="^[0-9]*[.,]?[0-9]*$"
                            onChange={(e) => handleChange(e, 'amount')}
                        />
                    </div>
                    <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
                        List NFT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FyreSwap