import marquee from './Images/Products/marquee.jpg'
import booth from './Images/Products/photobooth.jpg'
import minibar from './Images/Products/minibar.jpg'
import chair from './Images/Products/chair.png'
import lowrider from './Images/Products/lowriderphoto.jpg'
import tent from './Images/Products/tent.jpg'
import saloon from './Images/Products/saloon.jpeg'
import preschool from './Images/Products/preschool.jpg'
import roundtable from './Images/Products/roundtable.jpg'
import table from './Images/Products/table.jpg'
import { tab } from '@testing-library/user-event/dist/tab'


const ProdPageCaps = {
    '360photobooth' : 
    {
        name : '360 Photo & Video Booth',
        price : ['240', '250', '300'],
        caps: ['/hour,', '/hour,', '/hour,' ],
        caps2: ['5+', '4', '1-3' ],
        caps3: ['hours', 'hours', 'hours' ],
        photo : booth,
    },
    'marquee' : 
    {
        name : 'Marquee Letters',
        price : ['50', '65', '75'],
        caps: ['/letter,', '/letter,', '/letter,' ],
        caps2: ['4+', '3', '1-2' ],
        caps3: ['letters', 'letters', 'letters' ],
        photo : marquee,
    },
    'bar' :
    {
        name : 'Bar',
        price : ['Contact for rate', ],
        caps: ['', ],
        caps2: ['',  ],
        caps3: ['', ],
        photo : minibar,
    },
    'lowrider' :
    {
        name : '1967 Chevy Impala',
        price : ['Contact for rate', ],
        caps: ['', ],
        caps2: ['',  ],
        caps3: ['', ],
        photo : lowrider,
    },
    'saloon' :
    {
        name : 'Saloon',
        price : ['Contact for rate', ],
        caps: ['', ],
        caps2: ['',  ],
        caps3: ['', ],
        photo : saloon,
    },
    'tent': {
        name : '10\' x 12\' Tarp',
        price : ['75', ],
        caps: ['/night,',],
        caps2: ['1',  ],
        caps3: ['tarp', ],
        photo : tent,
    },
    'chair': {
        name : 'Foldable Chair',
        price : ['1.50', '2' ],
        caps: ['/chair,', '/chair,'],
        caps2: ['100+', '1-100' ],
        caps3: ['chairs','chairs', ],
        photo : chair,
    },
    'childchair': {
        name : 'Childrens Foldable Chair',
        price : ['2.50',  ],
        caps: ['/chair,', ],
        caps2: ['1+',  ],
        caps3: ['chairs', ],
        photo : preschool,
    },
    'table': {
        name : 'Foldable Table',
        price : ['12',],
        caps: ['/table,',],
        caps2: ['1+', ],
        caps3: ['table', ],
        photo : table,
    },
    'roundtable': {
        name : 'Foldable Round Table',
        price : ['15', ],
        caps: ['/table,', ],
        caps2: ['1+', ],
        caps3: ['table', ],
        photo : roundtable,
    }
};

export default ProdPageCaps