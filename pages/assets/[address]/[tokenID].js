import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import NFTImage from '../../../components/NFTDetails/NFTImage'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'
import NFTDetails from '../../../components/NFTDetails/NFTDetails'
import NFTBasicInfo from '../../../components/NFTDetails/NFTBasicInfo'

const style = {
  wrapper: `h-[130vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4 bg:-[#202226] lg:max-w-none lg:py-8 lg:px-24`,
  nftContainer: `flex flex-col lg:flex-row lg:space-x-4`,
  leftContainer: `flex flex-col space-y-4`,
  leftElement: `hidden lg:block`,
  rightContainer: `flex flex-1 flex-col space-y-4`,
  buyoutContainer: `flex-1`,
  loading: `text-white`
}

const NFT = () => {

  const [listing, setListing] = useState()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { tokenID } = router.query
  //console.log(tokenID)

  const marketplace = useMarketplace('0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da')

  const address = useAddress()

  useEffect(() => {
    getListing()
  }, [])

  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  const getListing = async () => {
    try {
      setLoading(true)
      const listing = await marketplace.getListing(BigNumber.from(tokenID))
      setListing(listing)
      setLoading(false)
    }

    catch (error) {
      console.log(error)
    }
  }

  const buyNFT = async () => {
    try {
      await marketplace.buyoutListing(tokenID, 1)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(listing)

  return (
    <div className={style.wrapper}>
      {loading ? (
        <div className={style.loading}>Loading...</div>
      ) : (
        <div className={style.nftContainer}>
          <div className={style.leftContainer}>
            <div className={style.leftElement}>
              <NFTImage image={listing?.asset?.image} />
            </div>

            <div className={style.leftElement}>
              <NFTDetails />
            </div>
          </div>

          <div className={style.rightContainer}>
            <NFTBasicInfo name={listing?.asset?.name} />

            <div className={style.buyoutContainer}>
              <NFTSalesInfo price=
                {listing?.buyoutCurrencyValuePerToken?.displayValue}
                buyNFT={buyNFT} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NFT