import React, {useState} from 'react'
import GalleryImg from './GalleryImg'

import ResponsiveAppBar from './Navbar'
import galImages from './Gallerycaps'
import Product from './Product'
import productCaps from './Productcaps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Homepage() {
  const [isStretched, setIsStretched] = useState(false);

  
  const buttonStyle = {
    width: isStretched ? '100%' : '16rem',
    height: isStretched ? '100%' : '3rem',
    borderRadius: isStretched ? '0' : '0.5rem',
    transition: 'width 1s ease, border-radius 0.5s ease'// Apply a smooth transition
  };

  const scrollToSection = (sectionId) => {
    if (!isStretched) setIsStretched(!isStretched);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }

    
  };
  return (
    <div >
      {/* <ResponsiveAppBar> </ResponsiveAppBar> */}
      <div className='h-[60vh] md:h-[70vh] lg:h-[80vh] w-full border border-y-0 border-slate-900 overflow-hidden flex justify-center'>
        {/* Gallery */}
        <GalleryImg items={galImages} autoSlideInterval={5000}/>
      </div>
      <div className='w-full flex flex-col items-center  justify-center py-8' id='productPage'>


        <button className='text-zinc-800 text-3xl font-bold  rounded-lg  py-2 mt-4 '
        id = 'prodButton'
        style={buttonStyle}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('productPage');
        }}>
          Party Supplies
          {/* <FontAwesomeIcon icon={faChevronDown}> </FontAwesomeIcon> */}
          </button>
          <p>
            Click <span className='text-[#d4af37] font-semibold'> order </span> to learn more and reserve
          </p>

      </div>
      {/* Catalog */}
      <div className='bg-zync-50 w-full mt-4 flex justify-center'>
          <Product items={productCaps}/>
          {/* <Product/> */}
      </div>
     
     
    </div>
   
  )
}

export default Homepage