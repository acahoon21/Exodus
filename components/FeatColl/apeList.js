import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMarketplace, useActiveListings, useNFTCollection, useNFTs } from '@thirdweb-dev/react'
import FeatCard from './FeatCard'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
  loading: `text-white`
}

const ApeList = () => {
  //const marketplace = useMarketplace("0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da")
  //const {data: listings, isLoading: loadingListings} = useActiveListings(marketplace)

  const hidden = useNFTCollection("0xca974F7E790D947E644B925e126A8cA7af3cBc8F");
  const { data: nfts, isLoading: loadingListings } = useNFTs(hidden, { start: 0, count: 100 });
  //0xca974F7E790D947E644B925e126A8cA7af3cBc8F
  return (
    <div className = {style.wrapper}>
        {nfts?.map((nft) => (
        <Link
            key = {nft.metadata.id}
            href = {`/assets/0xca974F7E790D947E644B925e126A8cA7af3cBc8F/${nft.metadata.id}`}
        >
          <a>
             <FeatCard nft = {nft}/>
          </a>
        </Link>
         ))}
    </div>
  )
}

export default ApeList