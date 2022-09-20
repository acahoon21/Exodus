import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { MediaRenderer, ThirdwebNftMedia, useNFTCollection, useNFTs } from '@thirdweb-dev/react'


const style = {
    wrapper: `relative flex h-[300px] w-[200px] cursor-pointer flex-col rounded-lg bg-[#333333] shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#4c505c]`,
    imageContainer: `h-3/4 overflow-hidden`,
    nftImage: `rounded-t-lg object-cover`,
    nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
    nftInfoContainer: `flex justify-between`,
    collectionTitle: `text-lg text-gray-300`,
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

const FeatCard = ({ nft }) => {
    console.log(nft)
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <div key={nft.metadata.id.toString()}>
                    <ThirdwebNftMedia
                        className={style.nftImage}
                        metadata={nft.metadata}
                        height={200}
                        width={200}
                        alt='nft'
                    />
                </div>
            </div>

            <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
          <div>

            <div className={style.nftTitle}>
              {nft.metadata.name}
            </div>
          </div>

          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image
                height={16}
                width={16}
                src='/weth-logo.svg'
                alt='weth'
              />
              <div className={style.priceValue}>
                {nft.buyoutCurrencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>

        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likesCounter}>
            {nft.asset?.stats?.favorites ?? 235}
          </div>
        </div>
      </div>
        </div>
    )
}

export default FeatCard