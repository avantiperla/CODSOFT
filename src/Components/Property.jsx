import React from 'react'

const Property = ({property}) => {
  return (
    <div className='flex flex-col  hover:scale-110 transition duartion-300 ease-in z-10  mt-10 ml-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
      
      <div className='h-[180px]'>
        <img src= {property.image} className='h-full w-full'/>
      </div>

      <p className='text-green-600 font-semibold px-2 pt-2'>${property.price}</p>

      <div className='font-bold px-2'>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-48 '>{property.title}</p>
      </div>

      <div> 
        <p className='w-56 text-gray-400 font-normal text-[12px] text-left px-2 pb-2'>{property.description.split(" ").slice(0,10).join(" ") + "... "}</p>
      </div>
    </div>
  )
}

export default Property