import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAddress } from '@thirdweb-dev/react'
//import { MdVerified } from 'react-icons/md'
//import CollectionStats from '../../components/Home/CollectionStats'
import { collectionData } from '../../static/collections'
import Listings from '../../components/Home/Listings'

const style = {
  wrapper: `flex flex-col bg-[#202226] relative flex flex-col`,
  container: `relative flex h-[300px] flex-col`,
  bannerContainer: `absolute h-1/2 w-full`,
  banner: `rounded-t-lg object-cover`,
  collectionInfoWrapper: `absolute inset-0 top-1/3 z-10 h-2/3 -translate-y-5`,
  collectionInfoContainer: `flex flex-col items-center space-y-4`,
  collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,
  collectionLogo: `rounded-full object-cover`,
  collectionInfo: `flex flex-col items-center space-y-6 text-white`,
  title: `text-4xl font-bold text-gray-200 underline underline-offset-8 decoration-red-500`,
  creatorInfoContainer: `flex items-center space-x-1`,
  creator: `text-sm font-medium text-white`,
  creatorName: `cursor-pointer text-blue-500`,
  verified: `h-5 w-5 text-red-500`,
  descriptionContainer: `max-w-3xl py-2 px-10 text-center text-gray-500`,
  collectionStats: `text-gray-400`
}

const Collection = () => {
  const address = useAddress()
  const [collection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  useEffect(() => {
    if (!slug) return
      ; (async () => {
        const collectionData = await getCollection()

        setCollection(collectionData)
      })()
  }, [slug])

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.bannerContainer}>
            <Image
              className={style.banner}
              src="/fireBanner.webp"
              layout='fill'
              alt='banner'
            />
          </div>

          <div className={style.collectionInfoWrapper}>
            <div className={style.collectionInfoContainer}>
              <div className={style.collectionLogoContainer}>
                <Image
                  className={style.collectionLogo}
                  src="/favFyre.png"
                  height={128}
                  width={128}
                  alt='logo'
                />
              </div>

              <div className={style.collectionInfo}>
                <div className={style.title}>Explore all NFTs for sale</div>

                
              </div>
            </div>
          </div>
        </div>
        <div> <br/> </div>
        <Listings />
      </div>
    </div>
  )
}

export default Collection