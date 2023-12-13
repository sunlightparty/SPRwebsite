import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faClock, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faApple, faGoogle, faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';
import Slplogo from './Images/SLPlogo.png'
import Applelogo from './Images/applelogo.png'
import Googlelogo from './Images/googlelogo.png'

function Contact() {
  

  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);

  const delay = 250; // Adjust the delay between divs as needed

  useEffect(() => {
    setTimeout(() => {
      setShowDiv1(true);
    }, 0 * 1);

    setTimeout(() => {
      setShowDiv2(true);
    }, delay * 1);

    setTimeout(() => {
      setShowDiv3(true);
    }, delay * 2);

    setTimeout(() => {
      setShowDiv4(true);
    }, delay * 3);
  }, []);

  const handleDivClick = (index) => {
    if (clickedIndexes.includes(index)) {
      setClickedIndexes(clickedIndexes.filter((i) => i !== index));
    } else {
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  return (
   <div>

    <Helmet>
        {/* <title>{`${admin ? "Admin Title" : "Client Title"}`}</title> */}
        <meta name="description" content="Sunlight Party Rental address. Sunlight Party Rental map. Sunlight Party Rental hours.
        Sunlight Party Rental instagram. Sunlight Party Rental facebook. Sunlight Party Rental youtube." />
    </Helmet>

    <div className=' w-full bg-zinc-50  min-h-[764px] md:flex justify-center'>
    <div className=" px-2  py-[20vh] max-w-[400px]   md:items-center">
      <div className={` transition-opacity ease-in duration-300  max-w-[400px]  ${showDiv1 ? 'opacity-100' : 'opacity-0'} w-full`}>
        <div className={` ${clickedIndexes.includes(0) ? 'border-4 border-[#D4AF36] rounded-2xl ' : ''} duration-300 `}>
          <div className={`cursor-pointer py-8 flex  items-center gap-x-3 `}
            onClick={() => handleDivClick(0)}>
            <p className="text-4xl font-semibold underline-offset-8 underline text-zinc-800 ml-6 md:ml-0 "> Address & Maps</p>
            <FontAwesomeIcon icon={clickedIndexes.includes(0) ? faChevronUp : faChevronDown} style={{ color: "#D4AF36", }} className='text-4xl' />
          </div>
          <div className={`transition-opacity ease-in duration-500 ${clickedIndexes.includes(0) ? 'opacity-100 visible ' : 'opacity-0 hidden'
            }`}>
            <div className=''>
              <p className='pb-4 text-xl font-medium'> 983 San Pablo Avenue, Albany, CA </p>
              <div className='flex justify-center gap-x-3'>
                <div className='text-center w-1/3 flex flex-col items-center justify-center'>
                  <a href='https://maps.apple.com/?address=983%20San%20Pablo%20Ave,%20Albany,%20CA%20%2094706,%20United%20States&ll=37.887435,-122.297758&q=983%20San%20Pablo%20Ave&_ext=EiYp9D5ESgTxQkAxX9AOtmuTXsA5chRqpiryQkBBSz8VObGSXsBQBA%3D%3D'
                    target='_blank' rel="noopener noreferrer">
                    <div className='h-16 w-16 rounded-full bg-zinc-300 border flex items-center justify-center'>
                      <img src={Applelogo} className='h-12'/>
                      {/* <FontAwesomeIcon icon={faApple} className='pb-1' size='2xl' color='white' /> */}
                    </div>
                  </a>
                  <p> Apple Maps</p>
                </div>
                <div className='text-center  w-1/3 flex flex-col items-center justify-center '>
                  <div className='h-16 w-16 rounded-full bg-zinc-300 border flex items-center justify-center'>
                    <a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwilw5nWjeCCAxVTOUQIHZM3BYQQwwV6BAgTEAQ&url=%2Fmaps%2Fdir%2F%2F983%2BSan%2BPablo%2BAve%2C%2BAlbany%2C%2BCA%2B94706%2Fdata%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80857932f296686f%3A0xa0d20f960c89fb9b%3Fsa%3DX%26ved%3D2ahUKEwilw5nWjeCCAxVTOUQIHZM3BYQQwwV6BAgQEAA&usg=AOvVaw3lD7t8Pj7jsxasL3RKVSj_&opi=89978449'
                      target='_blank' rel="noopener noreferrer">
                        <img src={Googlelogo} className='h-12'/>
                      {/* <FontAwesomeIcon icon={faGoogle} size='2xl' color='white'/> */}
                    </a>
                  </div>
                  <p> Google Maps</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`transition-opacity ease-in duration-300 ${showDiv2 ? 'opacity-100 ' : 'opacity-0'}  my-3`}>
        <div className={`duration-300 max-w-[400px] ${clickedIndexes.includes(1) ? 'border-4 border-[#D4AF36] rounded-2xl ' : ''}`}>
        <div className={`cursor-pointer py-8 flex  items-center gap-x-3`}
          onClick={() => handleDivClick(1)}>
          <p className="text-4xl font-semibold underline-offset-8 underline text-zinc-800 ml-6 md:ml-0"> Contact Info</p>
          <FontAwesomeIcon icon={clickedIndexes.includes(1) ? faChevronUp : faChevronDown} style={{ color: "#D4AF36", }} className='text-4xl' />

        </div>
        <div className={` transition-opacity duration-500 ${clickedIndexes.includes(1) ? 'opacity-100 visible' : 'opacity-0 hidden'
          }`}>
          <p className='text-lg pb-2 text-zinc-800'> For the fastest response please text</p>
          <div className='pb-4 '>
            <a href='sms:510-478-5029'>
              <button className='text-2xl text-green-500 font-semibold border-2 rounded-md border-green-500 px-2 py-3'> +1 510 478 5029</button>
            </a>
          </div>
          
        </div>
        </div>
      </div>
      <div className={`transition-opacity ease-in duration-300 ${showDiv3 ? 'opacity-100 border-[#D4AF36]' : 'opacity-0'} my-3 `}>
      <div className={`duration-300 max-w-[400px] ${clickedIndexes.includes(2) ? 'border-4 border-[#D4AF36] rounded-2xl ' : ''}`}>

        <div className={`cursor-pointer py-8 flex  items-center gap-x-3`}
          onClick={() => handleDivClick(2)}>
          <p className="text-4xl font-semibold underline-offset-8 underline text-zinc-800 ml-6 md:ml-0"> Hours</p>
          <FontAwesomeIcon icon={clickedIndexes.includes(2) ? faChevronUp : faChevronDown} style={{ color: "#D4AF36", }} className='text-4xl' />

        </div>
        <div className={`border-0 transition-opacity duration-500 text-2xl text-left pl-8 font-semibold pb-3 ${clickedIndexes.includes(2) ? 'opacity-100 visible' : 'opacity-0 hidden'
          }`}>
          <div className='flex pb-3'>
            <FontAwesomeIcon icon={faClock} className='pt-1 pr-2 ' color='#A1A1AA' />
            <p className='text-zinc-800'>11-7 Monday-Friday</p>
          </div>
          <div className='flex'>
            <FontAwesomeIcon icon={faHouse} className='pt-0.5 pr-2' color='#A1A1AA'/>
            <p className='text-zinc-800'>Showroom open by appointment only</p>
          </div>
          
          
         
        </div>
        </div>
      </div>

      <div className={`transition-opacity ease-in duration-300 ${showDiv4 ? 'opacity-100 border-[#D4AF36]' : 'opacity-0'} my-3 `}>
      <div className={`duration-300 max-w-[400px] ${clickedIndexes.includes(3) ? 'border-4 border-[#D4AF36] rounded-2xl ' : ''}`}>
        <div className={`cursor-pointer py-8 flex  items-center gap-x-3`}
          onClick={() => handleDivClick(3)}>
          <p className="text-4xl font-semibold underline-offset-8 underline text-zinc-800 ml-6 md:ml-0"> Social Media</p>
          <FontAwesomeIcon icon={clickedIndexes.includes(3) ? faChevronUp : faChevronDown} style={{ color: "#D4AF36", }} className='text-4xl' />


        </div>
        <div className={`border-0 transition-opacity duration-500 ${clickedIndexes.includes(3) ? 'opacity-100 visible' : 'opacity-0 hidden'
          }`}>
        

         <div className='flex gap-y-8 flex-col justify-center text-3xl pl-5 pb-4'>
         <a href='https://instagram.com/sunlightpartyrental?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noopener noreferrer">
                <div className='flex gap-x-2'>
                
                      <FontAwesomeIcon icon={faInstagram} className='h-10' color='#C13584'/>
                
                  <p className='text-[#D48D36] underline underline-offset-8'>@sunlightpartyrental</p>
                </div>
                </a>
                <a href='https://www.facebook.com/sunlight.party.rental?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer">
                <div className='flex gap-x-2'>
                  
                      <FontAwesomeIcon icon={faFacebook} className='h-10' color='#4267B2'/>
                  
                  <p className='text-[#D48D36] underline underline-offset-8'>@sunlight.party.rental</p>
                </div>
                </a>
                <a href='https://www.youtube.com/@SunlightPartyRental' target="_blank" rel="noopener noreferrer">
                <div className='flex gap-x-2'>
                
                        <FontAwesomeIcon icon={faYoutube} className='h-9' color='#FF0000' />
                
                  <p className='text-[#D48D36] underline underline-offset-8'>@SunlightPartyRental</p>
                </div>
                </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}
export default Contact