import React from 'react'
import { Popover } from '@headlessui/react'
import { useNetwork, ChainId } from '@thirdweb-dev/react'

const style = {
    Binance: `text-yellow-500 hover:text-yellow-200 hover:underline underline-offset-4`,
    Ethereum: `text-blue-500 hover:text-cyan-300 hover:underline underline-offset-4`,
    Polygon: `text-purple-500 hover:text-purple-300 hover:underline underline-offset-4`,
    Goerli: `text-gray-500 hover:text-gray-200 hover:underline underline-offset-4`,
    Ava: `text-red-500 hover:text-red-300 hover:underline underline-offset-4`,
    chev: `text-cyan-300`,
    chev2: `text-sky-400`,
    chev3: `text-fuchsia-400`

}

//{<span className={style.chev2}>⌄</span><span className={style.chev3}>⌄</span>}

const DropChains = () => {
    const [, switchNetwork] = useNetwork()
    return (
        <Popover className="relative">
            <Popover.Button>⛓ <span className={style.chev}>⌄</span></Popover.Button>
            
            <Popover.Panel className="absolute z-10 py-1 px-1 bg-[#04111d] rounded border border-red-500 w-28">
                <div className="grid grid-cols-2">
                    <ul>
                        <li>
                            <div className={style.Ethereum} onClick={() => switchNetwork(ChainId.Mainnet)}>Ethereum</div>
                        </li>
                        <li>
                            <div className={style.Ava} onClick={() => switchNetwork(ChainId.Avalanche)}>Avalanche</div>
                        </li>
                        <li>
                            <div className={style.Binance} onClick={() => switchNetwork(ChainId.BSC)}>Binance</div>
                        </li>
                        <li>
                            <div className={style.Polygon} onClick={() => switchNetwork(ChainId.Polygon)}>Polygon</div>
                        </li>
                        <li>
                            <div className={style.Goerli} onClick={() => switchNetwork(ChainId.Goerli)}>Goerli</div>
                        </li>
                    </ul>
                </div>
            </Popover.Panel>
        </Popover>
    )
}


export default DropChains