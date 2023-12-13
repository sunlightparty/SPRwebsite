import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <div className='z-4 shadow-g h-[4.3rem]'>
    <ResponsiveAppBar></ResponsiveAppBar>
    </div>
    
     <div className=' relative bg-zinc-100'>
       <Outlet/>
     </div>
     <footer>
     <Footer></Footer>
     </footer>
   
    </>
   
  )
}

export default Layout