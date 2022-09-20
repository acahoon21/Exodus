import {
    useMarketplace,
    useNetwork,
    useNetworkMismatch,
  } from "@thirdweb-dev/react";
  import { NATIVE_TOKEN_ADDRESS, TransactionResult } from "@thirdweb-dev/sdk";
  import type { NextPage } from "next";
  import { useRouter } from "next/router";
  //import style from "../style/Home.module.css";

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
}
  
  const Create: NextPage = () => {
    // Next JS Router hook to redirect to other pages
    const router = useRouter();
    const networkMismatch = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();
  
    // Connect to our marketplace contract via the useMarketplace hook
    const marketplace = useMarketplace(
      "0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da" // Your marketplace contract address here
    );
  
    // This function gets called when the form is submitted.
    async function handleCreateListing(e: any) {
      try {
        // Ensure user is on the correct network
        if (networkMismatch) {
          switchNetwork && switchNetwork(4);
          return;
        }
  
        // Prevent page from refreshing
        e.preventDefault();
  
        // Store the result of either the direct listing creation or the auction listing creation
        let transactionResult: undefined | TransactionResult = undefined;
  
        // De-construct data from form submission
        const { listingType, contractAddress, tokenId, price } =
          e.target.elements;
  
        // Depending on the type of listing selected, call the appropriate function
        // For Direct Listings:
        if (listingType.value === "directListing") {
          transactionResult = await createDirectListing(
            contractAddress.value,
            tokenId.value,
            price.value
          );
        }
  
        // For Auction Listings:
        if (listingType.value === "auctionListing") {
          transactionResult = await createAuctionListing(
            contractAddress.value,
            tokenId.value,
            price.value
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
  
    async function createAuctionListing(
      contractAddress: string,
      tokenId: string,
      price: string
    ) {
      try {
        const transaction = await marketplace?.auction.createListing({
          assetContractAddress: contractAddress, // Contract Address of the NFT
          buyoutPricePerToken: price, // Maximum price, the auction will end immediately if a user pays this price.
          currencyContractAddress: NATIVE_TOKEN_ADDRESS, // NATIVE_TOKEN_ADDRESS is the crpyto curency that is native to the network. i.e. Rinkeby ETH.
          listingDurationInSeconds: 60 * 60 * 24 * 7, // When the auction will be closed and no longer accept bids (1 Week)
          quantity: 1, // How many of the NFTs are being listed (useful for ERC 1155 tokens)
          reservePricePerToken: 0, // Minimum price, users cannot bid below this amount
          startTimestamp: new Date(), // When the listing will start
          tokenId: tokenId, // Token ID of the NFT.
        });
  
        return transaction;
      } catch (error) {
        console.error(error);
      }
    }
  
    async function createDirectListing(
      contractAddress: string,
      tokenId: string,
      price: string
    ) {
      try {
        const transaction = await marketplace?.direct.createListing({
          assetContractAddress: contractAddress, // Contract Address of the NFT
          buyoutPricePerToken: price, // Maximum price, the auction will end immediately if a user pays this price.
          currencyContractAddress: NATIVE_TOKEN_ADDRESS, // NATIVE_TOKEN_ADDRESS is the crpyto curency that is native to the network. i.e. Rinkeby ETH.
          listingDurationInSeconds: 60 * 60 * 24 * 7, // When the auction will be closed and no longer accept bids (1 Week)
          quantity: 1, // How many of the NFTs are being listed (useful for ERC 1155 tokens)
          startTimestamp: new Date(0), // When the listing will start
          tokenId: tokenId, // Token ID of the NFT.
        });
  
        return transaction;
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <form onSubmit={(e) => handleCreateListing(e)}>
          <div>
        <div className={style.wrapper}>
          {/* Form Section */}
          <div className={style.content}>
            <h1 className={style.title}>
              Upload your NFT!
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
                Direct Listing
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
                Auction Listing
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
              placeholder="NFT Contract Address"
            />
            </div>
            {/* NFT Token ID Field */}
            <div className={style.transferPropContainer}>
            <input
              type="text"
              name="tokenId"
              className={style.transferPropInput}
              placeholder="NFT Token ID"
            />
            </div>
            {/* Sale Price For Listing Field */}
            <div className={style.transferPropContainer}>
            <input
              type="text"
              name="price"
              className={style.transferPropInput}
              placeholder="Sale Price"
            />
            </div>
            <button
              type="submit"
              className={style.confirmButton}
            >
              List NFT
            </button>
          </div>
        </div>
        </div>
      </form>
    );
  };
  
  export default Create;
  