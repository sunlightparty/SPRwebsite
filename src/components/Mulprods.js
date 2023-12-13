import React from 'react'
import MProdCaps from './MultProdCaps'
import Product from './Product'
import { Helmet } from 'react-helmet'

function Mulprods() {
  return (
    <div>
    <Helmet>
        <meta name="description" content={`Table & chair rental for parties & events in the bay area. 
        Foldable chairs, foldable kids chairs, round foldable tables, round rectangular table.
        Locations in Richmond and Albany`}/>
    </Helmet>
    <div className='bg-zinc-50'>
      <div className='py-16  h-[100vh] lg:h-[80vh] flex items-center '>
      <div className=' w-full mt-4 flex justify-center '>
        <Product items={MProdCaps} />
        {/* <Product/> */}
      </div>
      </div>
    </div>
    </div>
  )
}

export default Mulprods
