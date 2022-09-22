import { GrTextAlignLeft } from 'react-icons/gr'
import { BsFillBookmarkFill } from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
  wrapper: `flex flex-col bg-[#202226] divide-y rounded-lg overflow-hidden border divide-white border-white`,
  icon: `h-5 w-5 text-gray-600`,
}

const NFTDetails = (item) => {
  const dropdownData = [
    {
      title: 'Description',
      icon: <GrTextAlignLeft className = {style.icon} />
    },
    {
      title: 'Properties',
      icon: <BsFillBookmarkFill className = {style.icon} />
    },
  ]

  return (
    <div className = {style.wrapper}>
      {dropdownData.map((item, index) => (
      <Dropdown key={index} title={item.title} icon={item.icon}/>
      ))}
    </div>
  )
}

export default NFTDetails