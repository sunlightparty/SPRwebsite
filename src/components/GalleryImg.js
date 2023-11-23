import React, { useState, useEffect} from 'react'

function GalleryImg({ items 
    ,autoSlideInterval=5000}) {

    const [counter, setCounter] = useState(1);
    const [pause] = useState(false);
    const content = items;

    const handleNext = () => {
    if (counter !== content.length) {
        setCounter(counter + 1);
    } else {
        setCounter(1);
    }
    };

    const handlePage = (page) => {
    setCounter(page);
    };

    useEffect(() => {
    let interval = setInterval(() => {
        if (!pause) {
        handleNext();
        } else {
        clearInterval(interval);
        }
    }, autoSlideInterval);
    return () => clearInterval(interval);
    });

  return (
    <div className="relative h-full w-full flex justify-center ">
        {/* image */}
        {content.map((item, index) => (
            <div className={`${counter -1 === index ? "show" : "hidden"}`}>
               <img className="scale-x-125 md:scale-x-100 h-full -z-5-" src={item.link} alt="gallery"/>
            </div>
        ))}
        {/* caption */}
        {content.map((item, index) => (
            <div className={`${counter - 1 === index ? "show" : "hidden"} absolute top-2 left-1/2 transform -translate-x-1/2 w-[60%]`}>
             <p className="bg-gray-300/95 z-4 text-slate-900 px-2 py-1 rounded font-bold text-2xl"> {item.name} </p>
            </div>
        ))}
        <div className="absolute top-16 left-0 w-full h-full flex items-center justify-center">
            <button className="bg-orange-400/95 z-4 text-white px-4 py-2 rounded-3xl font-bold text-2xl"> Order Now </button>
        </div>
        {/* 3 bars */}
       <div className='w-3/4 h-3 absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center flex justify-center items-center'>
            {content.map((item, index) => (
                <span
                    key={index}
                    className={`dot cursor-pointer h-1.5 mr-1 inline-flex bg-white  ${counter - 1 === index ? "opacity-100 active " : "   opacity-50 "}`}
                    onClick={() => handlePage(index + 1)}
                    style={{width: "30%"}}
                />
            ))}
       </div>
    </div>
  )
}
export default GalleryImg