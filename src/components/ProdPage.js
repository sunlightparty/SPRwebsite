import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMessage } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const ProdPage = ({ items }) => {
  const { id } = useParams();
  const content = items[id];
  const price = content.price;
  const caps = content.caps;
  const caps2 = content.caps2;
  const caps3 = content.caps3;


  return (
    <div>
      <Helmet>
        <meta name="description" content={`${content.name} rental in the bay area. Locations in Richmond and Albany`}/>
        </Helmet>
      <div className='text-left md:flex flex-col items-center'>
        <div className='md:flex md:pt-24 md:border-t-4 '>
        <div className='border-b-2  border-[#d4af37] flex items-center'>
          <img className='min-h-[420px] md:min-h-[0px] md:max-h-[360px]'
            src={content.photo} alt='product image' />
          {/* <div class="absolute inset-0 bg-zinc- opacity-50 h-1/2"></div> */}
        </div>
        <div className='pl-8 pr-2 border-b-2  bg-zinc-100 md:pt-12'>
          <div className='pt-8 pb-4 '>
            <h1 className='text-4xl font-semibold'> {content.name} </h1>
          </div>
          <div className='pb-8  pr-8'>
            {
              price.map((item, index) => (
                <>
                  <p className={`${'text-zinc-' + (600 + index * 100)}  font-bold pb-3 border-b-4 text-4xl pt-2`}> ${item}
                    <span className='text-xl'>{caps[index]}</span>
                    <span className='text-3xl'> {caps2[index]}</span>
                    <span className='text-xl'> {caps3[index]}</span>
                  </p>

                </>
              ))
            }
          </div>
        </div>
        </div>
        
        <div className=' bg-zinc-100 md:flex md:py-12 max-w-[900px]'>
          <div className='pl-6 '>
            <p className='pt-10 pb-6 text-4xl font-semibold pb-16'> Text your <span className='text-[#D48D36]'> name </span> and preferred <span className='text-[#D48D36]'> date</span> to order:  </p>
          </div>
          <div className=' text-center md:pr-4'>
            <div className='md:pt-8'>
            <a href='sms:510-478-5029'>
              <button className='w-[20rem] py-1.5 bg-[#D48D36] text-2xl font-semibold rounded-sm shadow-md text-white'>
                <span> <FontAwesomeIcon icon={faMessage} /> </span>
                Message Now</button>
            </a>
            </div>
            
            <div className='pb-16 pt-6'>
              <Link to='/'>
                <button className='w-[20rem] py-1.5 text-red-500 border text-2xl font-semibold shadow-md bg-white'>
                  <span> <FontAwesomeIcon icon={faCartShopping} /> </span>
                  Continue Shopping</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      </div>
  )
}

export default ProdPage
