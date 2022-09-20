import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNetwork, ChainId } from '@thirdweb-dev/react'

const style = {
  Binance: `text-yellow-500 hover:text-yellow-200`,
  Ethereum: `text-blue-500 hover:text-cyan-300`,
  Polygon: `text-purple-500 hover:text-purple-300`,
  Goerli: `text-gray-500 hover:text-gray-200`,
  Ava: `text-red-500 hover:text-red-300`
}

/*
Platform is made with next.js. Code written in React with Javascript. Styling is done with Tailwind css.
I just copied and pasted the "Transition" wrap so I believe it was having no effect due to not being
written with Tailwind. Tailwind has documentation for transitions and transforms. Feel free to contact
me if you have any questions. 
*/

const Example = () => {
  const [, switchNetwork] = useNetwork()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>Chains</Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Menu.Items>
        <ul>
          <li>
            <Menu.Item>
              <div className={style.Ethereum} onClick={() => switchNetwork(ChainId.Mainnet)}>Ethereum</div>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <div className={style.Ava} onClick={() => switchNetwork(ChainId.Avalanche)}>Avalanche</div>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <div className={style.Binance} onClick={() => switchNetwork(ChainId.BSC)}>Binance</div>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <div className={style.Polygon} onClick={() => switchNetwork(ChainId.Polygon)}>Polygon</div>
            </Menu.Item>
          </li>
          <li>
            <Menu.Item>
              <div className={style.Goerli} onClick={() => switchNetwork(ChainId.Goerli)}>Goerli</div>
            </Menu.Item>
          </li>
        </ul>
      </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Example