import { useState, useEffect } from 'react'
import GalleryImg from './GalleryImg'
import FadingText from './FadingText'

import ResponsiveAppBar from './Navbar'
import galImages from './Gallerycaps'
import Product from './Product'
import productCaps from './Productcaps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Homepage() {

  const fadingTextStyles = `
    .text {
      position: relative;
      line-height: 2em;
      overflow: hidden;
      /* for demo purpose */
     
      margin: 0 auto;
    }

    .fadingEffect {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background: #fafafa;
      animation: showHide 1.5s ease-in forwards; /* Use 'forwards' to keep the final state after animation */
    }

    .fadingEffecttwo {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background: #fafafa;
      animation: showHide 1s ease-in forwards; /* Use 'forwards' to keep the final state after animation */
    }
    
    @keyframes showHide {
      0% {width:100%}
      100% {width:0%} 
     
    }
  `;

  const [isStretched, setIsStretched] = useState(false);
  const [showText1, setText1] = useState(false);
  const [showText2, setText2] = useState(false);


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
      section.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const delay = 1800;
  useEffect(() => {
    setTimeout(() => {
      setText1(true);
    }, 0 * 1);

    setTimeout(() => {
      setText2(true);
    }, delay * 1);
  }, []);


  return (
    <div>
      <div className='w-full border border-y-0  overflow-hidden    py-8 md:py-12 flex flex-col items-center Testing ' style={{}} >
        
        <div className='flex max-w-[373px] md:max-w-[600px] lg:max-w-[1000px] w-fit pb-8 text-xl md:text-3xl lg:text-4xl font-bold'>
          <style>{fadingTextStyles}</style>
          <div className="text w-fit text-zinc-800">
            <p className=''> Renting <span className='text-[#D4AF36]'>Joy</span>,  </p>
            <div className="fadingEffect"></div>
          </div>
          <div className="text w-fit   pl-1 text-zinc-800">
            <p className={`${showText2 ? 'opacity-100' : 'opacity-0'}`}> One Event at a Time </p>
            <div className={`${showText2 ? 'fadingEffecttwo ' : ''}`}></div>
          </div>
        </div>

        {/* Gallery */}
        <GalleryImg items={galImages} autoSlideInterval={5000} />
        <div className="w-full h-full flex items-center justify-center pt-8 md:pt-12">
          <a href='tel:510-478-5029'>
            <button className="bg-[#d4af37]/95 z-4 text-white px-8 md:px-12 lg:px-16 py-2 rounded-lg font-bold text-2xl lg:text-3xl border-2 "> Call now </button>
          </a>
        </div>
      </div>
      <div className='w-full flex flex-col items-center  justify-center py-8' id='productPage'>


        <button className='text-zinc-800 text-3xl font-bold  rounded-lg  py-2 mt-4 '
          id='prodButton'
          style={buttonStyle}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('productPage');
          }}>
          Party Supplies
          {/* <FontAwesomeIcon icon={faChevronDown}> </FontAwesomeIcon> */}
        </button>
        <p>
          Click <span className='text-[#d4af37] font-semibold md:text-xl'> order </span> to learn more and reserve
        </p>

      </div>
      {/* Catalog */}
      <div className=' w-full mt-4 flex justify-center pb-8'>
        <Product items={productCaps} />
        {/* <Product/> */}
      </div>


    </div>

  )
}

export default Homepage