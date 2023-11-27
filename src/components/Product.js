import React from "react"
import Bar from './Images/Gallery/bar.jpg'

function Product({items}) {
  const content = items;
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
        {
        content.map((item,index) => (
        <div className="shadow-lg border-t-4 border-[#d4af37] bg-zinc-50  flex justify-center py-4 px-2 w-80 h-44 w-[22rem] mb-2">
        <div className="w-36 h-36 rounded-full border-2 border-slate-900 relative overflow-hidden">
            <img className="object-cover h-full w-full" src={item.link}/>
        <div className="absolute top-4 left-[8.7rem] w-[122%] border border-slate-900">
        </div>
        </div>
        <div className="w-44 h-44 flex flex-col items-center gap-y-2 text-center pr-0 relative">
            <p className="text-2xl font-bold">{item.name}</p>
            <button className="text-zinc-50 text-2xl bg-[#d4af37] w-3/4 py-2 rounded-sm font-bold absolute bottom-12"> Order</button>
        </div>
    </div>
        ))
    }
    </div>
    
    
  )
}
export default Product