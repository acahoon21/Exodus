import Header1 from '../components/Header/Header1'
import Header2 from '../components/Header/Header2'
//import Header from '../components/Header/Header'


const TopNavbarLayout = ({children}) => {
  return(
    <>
      <Header1/>
      <Header2/>
      <main>{children}</main>
    </>
  )
}

export default TopNavbarLayout