import { forwardRef } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { useNetwork, ChainId } from '@thirdweb-dev/react'

const style = {
  Binance: `text-yellow-500`,
  Ethereum: `text-blue-500`,
  Polygon: `text-purple-500`,
  Goerli: `text-white`,
  Ava: `text-red-500`
}

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

function Example() {
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