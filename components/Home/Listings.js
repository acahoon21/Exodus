import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMarketplace, useActiveListings } from '@thirdweb-dev/react'
import NFTCard from './NFTCard'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
  loading: `text-white`
}

const Listings = () => {
  const marketplace = useMarketplace("0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da")
  const {data: listings, isLoading: loadingListings} = useActiveListings(marketplace)

  useEffect(()=> {
    getListings()
  }, [])
  
  const getListings = async () => {
    try {
      const list = await marketplace.getActiveListings()

      setListings(list)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className = {style.wrapper}>
      {loadingListings ? (
      <div className={style.loading}>Loading listings...</div>
      ) : (
        <>
        {listings?.map((listing) => (
        <Link
          key = {listing.id}
          href = {`/assets/${listing.assetContractAddress}/${listing.id}`}
        >
          <a>
             <NFTCard listing = {listing}/>
          </a>
        </Link>
        
        ))}
      </>
      )}
    </div>
  )
}

export default Listings