import React from "react"
import Bar from './Images/Gallery/bar.jpg'

function Product({items}) {
  const content = items;
  return (
    <div>
        {
        content.map((item,index) => (
        <div className="border-t-2 border-slate-900 flex justify-center py-4 px-2">
        <div className="w-44 h-44 rounded-full border-2 border-slate-900 relative overflow-hidden">
            <img className="object-cover h-full w-full" src={item.link}/>
        <div className="absolute top-4 left-[8.7rem] w-[122%] border border-slate-900">
        </div>
        </div>
        <div className="w-44  h-44 flex flex-col justify-center items-center gap-y-2 text-center pr-0">
            <p className="text-3xl">{item.name}</p>
            <button className="text-white text-3xl bg-orange-400 w-3/4 py-3 rounded-full font-bold"> Order</button>
        </div>
    </div>
        ))
    }
    </div>
    
    
  )
}
export default Product