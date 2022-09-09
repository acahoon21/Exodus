import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { MediaRenderer, ThirdwebNftMedia, useNFTCollection, useNFTs } from '@thirdweb-dev/react'


const style = {
  wrapper: `relative flex h-[300px] w-[200px] cursor-pointer flex-col rounded-lg bg-[#333333] shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#4c505c]`,
  imageContainer: `h-3/4 overflow-hidden`,
  nftImage: `rounded-t-lg object-cover`,
  nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
  nftInfoContainer: `flex justify-between`,
  collectionTitle: `text-md text-gray-300`,
  nftTitle: `text-sm font-bold`,
  priceContainer: `flex flex-col items-end justify-center space-y-1`,
  priceTitle: `text-xs font-light text-gray-400`,
  priceValue: `text-gray-400`,
  wethImageContainer: `flex items-center justify-end space-x-2`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-3 w-3 text-red-500`,
  likesCounter: `text-xs text-gray-400`,
}

// const NFTCard = ({listing}) . . . use that as an input for the mktplace contract later. 

const BaCard = () => {
  const nftCollection = useNFTCollection("0xca974F7E790D947E644B925e126A8cA7af3cBc8F");
  const { data: nfts } = useNFTs(nftCollection, { start: 0, count: 1 });

  return (
    <div className = {style.wrapper}>
      <div className = {style.imageContainer}>
      {nfts?.map((nft) => (
        <div key={nft.metadata.id.toString()}>
        <ThirdwebNftMedia
          className = {style.nftImage}
          metadata={nft.metadata}
          height = {200}
          width = {200}
          alt = 'nft'
        />
         </div>
      ))}
      </div>

      <div className = {style.nftLowerContainer}>
        <div className = {style.nftInfoContainer}>
          <div>
              <div className = {style.collectionTitle}>
                <h2>Bored Ape Yacht Club</h2>
              </div>

            <div className = {style.nftTitle}>
              <h1>...</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BaCard