import React from "react"
import { Link } from "react-router-dom";

function Product({items}) {
  const content = items;
  return (
    <div className="w-[22rem] md:w-[45rem] lg:w-[68rem] flex flex-wrap  justify-items-start items-center gap-y-4 gap-x-4 ">
        {
        content.map((item,index) => (
        <div className="shadow-lg border-t-4 border-[#d4af37] bg-zinc-50  flex justify-center py-4 px-2  h-44 w-[22rem] mb-2 ">
        <div className="w-36 h-36 rounded-full border-2 border-slate-900 relative overflow-hidden bg-white">
            <img className={`object-cover h-full w-full bg-white ${item.name === "Saloon" | item.name === "Low Riders" ? '' : 'scale-[.75]'}  ${item.name === "Marquee letters" ? 'pl-3' : (item.name === "Minibar") ? 'pl-2 pt-2' : 'pl-0'}`} src={item.photo}/>
        <div className="absolute top-4 left-[8.7rem] w-[122%] border border-slate-900">
        </div>
        </div>
        <div className="w-44 h-full flex flex-col items-center gap-y-2 text-center pr-0 relative  justify-center">
            <p className="text-2xl font-bold max-w-[9rem]">{item.name}</p>
            <Link to={item.link} className="text-zinc-50 text-2xl bg-[#d4af37] w-3/4 py-2 rounded-sm font-bold cursor-pointer">
              <button className=""> Order</button>
            </Link>
        </div>
    </div>
        ))
    }
    </div>
    
    
  )
}
export default Product