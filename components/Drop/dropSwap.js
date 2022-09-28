import React from 'react'
import { Popover } from '@headlessui/react'
import { useNetwork, ChainId } from '@thirdweb-dev/react'
import Link from 'next/link'

const style = {
    Binance: `text-yellow-500 hover:text-yellow-200 hover:underline underline-offset-4`,
    Ethereum: `text-red-500 hover:text-cyan-300 hover:underline underline-offset-4`,
    Polygon: `text-purple-500 hover:text-purple-300 hover:underline underline-offset-4`,
    Goerli: `text-gray-500 hover:text-gray-200 hover:underline underline-offset-4`,
    Ava: `text-red-500 hover:text-red-300 hover:underline underline-offset-4`,
    chev: `text-cyan-300`,
    chev2: `text-sky-400`,
    chev3: `text-fuchsia-400`

}

//{<span className={style.chev2}>⌄</span><span className={style.chev3}>⌄</span>}

const DropMkt = () => {
    const [, switchNetwork] = useNetwork()
    return (
        <Popover className="relative">
            <Popover.Button> 🔥FyreSwap🔥 <span className={style.chev}>⌄</span></Popover.Button>

            <Popover.Panel className="absolute z-10 py-1 px-1 bg-[#04111d] rounded border border-cyan-300 w-30">
                <div className="grid grid-cols-2">
                    <ul>
                        <li>
                            <Link href='../../currency/fyreSwap'>
                                <div className={style.Ethereum}> Swap </div>
                            </Link>
                        </li>
                        <li>
                        <Link href='../../currency/wallet'>
                                <div className={style.Ethereum}>Transfer</div>
                            </Link>
                        </li>
                        <li>
                        <Link href='../../currency/onRamp'>
                                <div className={style.Ethereum}>Ramp</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Popover.Panel>
        </Popover>
    )
}


export default DropMkt