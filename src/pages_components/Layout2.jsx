import { Outlet, } from 'react-router-dom'
import Header from '../components/Header'


const Layout2 = ({reqCount}) => {

  return (
    <div>
        <Header count={reqCount}/>
        <Outlet/>
    </div>
  )
}

export default Layout2