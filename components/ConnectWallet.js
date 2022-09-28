import {
    useMetamask,
    //useWalletConnect,
    //useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
    useChainId,
  } from "@thirdweb-dev/react";
  
  const style = {
    Binance: `text-yellow-500 hover:text-yellow-200 hover:underline underline-offset-4`,
    Ethereum: `text-xl font-bold text-red-500 hover:text-cyan-300 hover:underline underline-offset-4`,
    Polygon: `text-purple-500 hover:text-purple-300 hover:underline underline-offset-4`,
    Goerli: `text-gray-500 hover:text-gray-200 hover:underline underline-offset-4`,
    Ava: `text-red-500 hover:text-red-300 hover:underline underline-offset-4`,
    chev: `text-cyan-300`,
    chev2: `text-sky-400`,
    chev3: `text-fuchsia-400`

}


  export const ConnectWallet = () => {
    //const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    //const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();
    const chain = useChainId();
    // If a wallet is connected, show address, chainId and disconnect button
    if (address) {
      return (
        <div>
          <button className={style.Ethereum} onClick={disconnectWallet}>Disconnect</button>
        </div>
      );
    }
    // If no wallet is connected, show connect wallet options
    return (
      <div>
        <button onClick={() => connectWithMetamask()}>Connect!</button>
      </div>
    );
  };

  export default ConnectWallet