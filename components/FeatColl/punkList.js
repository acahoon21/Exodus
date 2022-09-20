import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMarketplace, useActiveListings, useNFTCollection, useNFTs } from '@thirdweb-dev/react'
import FeatCard from './FeatCard'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
  loading: `text-white`
}

const PunkList = () => {
  //const marketplace = useMarketplace("0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da")
  //const {data: listings, isLoading: loadingListings} = useActiveListings(marketplace)

  const hidden = useNFTCollection("0x293d936ead39e353feEDAd47c921e9902c345957");
  const { data: nfts, isLoading: loadingListings } = useNFTs(hidden, { start: 0, count: 100 });

  return (
    <div className={style.wrapper}>
      {loadingListings ? (
        <div className={style.loading}>Loading Listings...</div>
      ) : (
        <>
          {nfts?.map((nft) => (
            <Link
              key={nft.metadata.id}
              href={`/assets/0x293d936ead39e353feEDAd47c921e9902c345957/${nft.metadata.id}`}
            >
              <a>
                <FeatCard nft={nft} />
              </a>
            </Link>
          ))}
        </>
      )}
    </div>
  )
}

export default PunkList