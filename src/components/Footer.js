import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="h-40 bg-zinc-400 flex flex-col justify-center items-center">
            <p className='mb-0.5 text-lg'> &copy; 2023 Sunlight Party Rental</p>
            <p className='mb-2 text-lg'> 983 San Pablo Avenue, Albany, CA</p>
            <div className='flex gap-x-2'>
                <a href='https://instagram.com/sunlightpartyrental?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='h-10' />
                </a>
                <a href='https://www.facebook.com/sunlight.party.rental?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='h-10' />
                </a>
                <a href='https://www.youtube.com/@SunlightPartyRental' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className='h-10' />
                </a>
            </div>
        </div>
    )
}
export default Footer