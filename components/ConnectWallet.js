import {
    useMetamask,
    //useWalletConnect,
    //useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
    useChainId,
  } from "@thirdweb-dev/react";
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
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      );
    }
    // If no wallet is connected, show connect wallet options
    return (
      <div>
        <button onClick={() => connectWithMetamask()}>Connect Wallet</button>
      </div>
    );
  };

  export default ConnectWallet