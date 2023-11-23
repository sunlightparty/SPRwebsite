import React from 'react'
import GalleryImg from './GalleryImg'

import ResponsiveAppBar from './Navbar'
import galImages from './Gallerycaps'
import Product from './Product'
import productCaps from './Productcaps'

function Homepage() {
  return (
    <div>
      <ResponsiveAppBar> </ResponsiveAppBar>
      <div className='h-[60vh] md:h-[70vh] lg:h-[80vh] w-full border border-slate-900 overflow-hidden flex justify-center'>
        {/* Gallery */}
        <GalleryImg items={galImages} autoSlideInterval={5000}/>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
      <div className=' px-4 bg-sky-400 w-[60%] rounded-2xl mt-4'>
        <p className='text-white text-2xl font-bold '> Products </p>
      </div>
      {/* Catalog */}
      <div className='bg-slate-100 w-full mt-4'>
          <Product items={productCaps}/>
          {/* <Product/> */}
      </div>
      </div>
     
    </div>
   
  )
}

export default Homepage