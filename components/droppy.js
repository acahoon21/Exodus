import React from 'react'
import { Popover } from '@headlessui/react'
import { useNetwork, ChainId } from '@thirdweb-dev/react'

const style = {
    Binance: `text-yellow-500 hover:text-yellow-200 hover:underline underline-offset-4`,
    Ethereum: `text-blue-500 hover:text-cyan-300 hover:underline underline-offset-4`,
    Polygon: `text-purple-500 hover:text-purple-300 hover:underline underline-offset-4`,
    Goerli: `text-gray-500 hover:text-gray-200 hover:underline underline-offset-4`,
    Ava: `text-red-500 hover:text-red-300 hover:underline underline-offset-4`,
    chev: `text-gray-400`
}

const Droppy = () => {
    const [, switchNetwork] = useNetwork()
    return (
        <Popover className="relative">
            <Popover.Button>Chains <span className={style.chev}>⌄</span></Popover.Button>
            
            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <ul>
                        <li>
                            <a className={style.Ethereum} onClick={() => switchNetwork(ChainId.Mainnet)}>Ethereum</a>
                        </li>
                        <li>
                            <a className={style.Ava} onClick={() => switchNetwork(ChainId.Avalanche)}>Avalanche</a>
                        </li>
                        <li>
                            <a className={style.Binance} onClick={() => switchNetwork(ChainId.BSC)}>Binance</a>
                        </li>
                        <li>
                            <a className={style.Polygon} onClick={() => switchNetwork(ChainId.Polygon)}>Polygon</a>
                        </li>
                        <li>
                            <a className={style.Goerli} onClick={() => switchNetwork(ChainId.Goerli)}>Goerli</a>
                        </li>
                    </ul>
                </div>
            </Popover.Panel>
        </Popover>
    )
}


export default Droppy