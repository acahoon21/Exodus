import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
import NFTCard from './NFTCard'

const style = {
  
}

const Listings = () => {
  const [listings, setListings] = useState([])
  const marketplace = useMarketplace("0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da")
  
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

   console.log(listings)
  return (
    <div className = {style.wrapper}>
      {listings.length > 0 ? (
      <>
        {listings?.map((listing, index)=> (
        <Link
          href = {`/assets/${listing.assetContractAddress}/${listing.id}`}
          key = {index}
        >
          <a>
             <NFTCard/>
          </a>
        </Link>
        
        ))}
      </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Listings