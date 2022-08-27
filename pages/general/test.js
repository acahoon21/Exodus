import {
    useNFTCollection,
    useNFTs,
    ThirdwebNftMedia,
  } from "@thirdweb-dev/react";

  const style = {
      wrapper: ``
  }

  export default function NFTCollectionRender() {
    // Get your NFT Collection using it's contract address
    const contract = useNFTCollection("0x293d936ead39e353feEDAd47c921e9902c345957");
  
    // Load (and cache) the metadata for the NFT with token ID 0
    const { data: nfts, isLoading } = useNFTs(contract);
  
    // Render the NFT metadata using the `ThirdwebNftMedia` component
    return (
      <div>
        {!isLoading && nfts ? (
          <ThirdwebNftMedia metadata={nfts.metadata} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }