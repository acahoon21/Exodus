import {
    useNetwork,
    useNetworkMismatch,
    useSDK,
  } from "@thirdweb-dev/react";
  import { NATIVE_TOKEN_ADDRESS, TransactionResult } from "@thirdweb-dev/sdk";
  import type { NextPage } from "next";
  import { useRouter } from "next/router";

  const style = {
    title: 'relative flex items-center justify-center text-gray-300 text-[40px] font-semibold',
    wrapper: `w-screen flex items-center justify-center mt-14`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4 border border-red-800`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-2 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl text-white`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `w-full bg-[#f51111] my-2 rounded-2xl py-5 px-8 text-2xl font-semibold flex items-center justify-center cursor-pointer border border-[#fb4848] hover:border-white`,
    swap: `text-[#fb4848]`,
    ctaContainer: 'flex',
    gameButton: 'flex items-center relative text-lg font-semibold px-8 py-2 bg-black rounded-lg mr-5 text-[#fb4848] hover:bg-black border border-black hover:border-[#fb4848] peer-checked:text-red-500 peer-checked:border-red-500 shadow-lg hover:shadow-red-500/60 cursor-pointer',
    directButton: 'flex items-center relative text-lg font-semibold px-8 py-2 bg-black rounded-lg mr-5 text-[#fb4848] hover:bg-black border border-black hover:border-[#fb4848] peer-checked:text-red-500 peer-checked:border-red-500 shadow-lg hover:shadow-red-500/60 cursor-pointer',
    input: `hidden peer`,
    list: `flex`,
    info: 'relative flex items-center justify-center text-gray-300 text-[20px] font-semibold',
}
  
  const Create: NextPage = () => {
    // Next JS Router hook to redirect to other pages
    /*const router = useRouter();
    const networkMismatch = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const sdk = useSDK()
  
    // This function gets called when the form is submitted.
    async function handleChange(e: any) {
      try {
        // Prevent page from refreshing
        e.preventDefault();
  
        // Store the result of either the direct listing creation or the auction listing creation
        let transactionResult: undefined | TransactionResult = undefined;
  
        // De-construct data from form submission
        const { listingType, amount, addressTo } =
          e.target.elements;
  
        // For Direct Listings:
        if (listingType.value === "directListing") {
          transactionResult = await createDirectListing(
            amount.value,
            addressTo.value
          );
        }
  
        // If the transaction succeeds, take the user back to the homepage to view their listing!
        if (transactionResult) {
          router.push(`/`);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    async function createDirectListing(
      amount: string,
      addressTo: string
    ) {
      try {
        const transaction = await sdk.wallet.transfer({
          assetContractAddress: contractAddress, // Contract Address of the NFT
          buyoutPricePerToken: price, // Maximum price, the auction will end immediately if a user pays this price.
          currencyContractAddress: NATIVE_TOKEN_ADDRESS, // NATIVE_TOKEN_ADDRESS is the crpyto curency that is native to the network. i.e. Rinkeby ETH.
        });
  
        return transaction;
      } catch (error) {
        console.error(error);
      }
    }*/

    return (
      //<form onSubmit={(e) => handleChange(e)}>
          <div>
          <div className={style.title}>Testing Grounds</div>
          <div className={style.info}>Hidden page. This is where you would claim a GiveAway.</div>
        <div className={style.wrapper}>
          {/* Form Section */}
          <div className={style.content}>
            <h1 className={style.title}>
              Transfer Test!
            </h1>
            <div>
                <br/>
            </div>
  
            {/* Toggle between direct listing and auction listing */}
            <div className={style.formHeader}>
              <ul className={style.list}>
                <li>
              <input
                type="radio"
                name="listingType"
                id="directListing"
                value="directListing"
                defaultChecked
                className={style.input}
                //required
              />
              <label htmlFor="directListing" className={style.directButton}>
                Crypto
              </label>
              </li>
              <li>
              <input
                type="radio"
                name="listingType"
                id="auctionListing"
                value="auctionListing"
                className={style.input}
                //required
              />
              <label htmlFor="auctionListing" className={style.gameButton}>
                Ignore4Now
              </label>
              </li>
              </ul>
            </div>
  
            {/* NFT Contract Address Field */}
            <div className={style.transferPropContainer}>
            <input
              type="text"
              name="contractAddress"
              className={style.transferPropInput}
              placeholder="0.0"
            />
            </div>
            {/* NFT Token ID Field */}
            <div className={style.transferPropContainer}>
            <input
              type="text"
              name="tokenId"
              className={style.transferPropInput}
              placeholder="To Address 0x ..."
            />
            </div>
            <button
              type="submit"
              className={style.confirmButton}
            >
              Confirm
            </button>
          </div>
        </div>
        </div>
      //</form>
    );
  };
  
  export default Create;