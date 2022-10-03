import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
//import Balances from '../pages/api/balances'

const style = {
    color: `text-white`
}


function Native({ nativeBalance, address, tokenBal }) {
    return (
        <div>
            <h3 className = {style.color}>Wallet: {address}</h3>
            <h3 className = {style.color}>Native Balance: {nativeBalance} ETH</h3>
            <h3 className = {style.color}>Token Balance: {tokenBal} </h3>
        </div>
    );
}

export async function getServerSideProps(context) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    const address = '0x112E994Ca7dD149658F0cA0816A16342BF42a3C1';

    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.GOERLI,
        address,
    });
    const tokenBal = await Moralis.EvmApi.token.getWalletTokenBalances({
        chain: EvmChain.GOERLI,
        address,
    });

    return {
        props: { address, nativeBalance: nativeBalance.result.balance.ether, tokenBal: tokenBal.result.map((token) => token.display()) },
    };
}

export default Native;