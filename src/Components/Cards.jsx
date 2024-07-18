import React from 'react'
import Property from './Property';

const Cards = ({properties}) => {
 
  return (
    <div className='mt-5 mb-10'>
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-5xl font-bold'>Explore properties in India</h1>
            <p className='text-gray-500 text-center'>Take a deep dive and browse homes for sale, original neighbourhood  photos,<br></br> resident reviews and local insights to find what is right for you</p>
        </div>
      {
        <div className='grid grid-cols-4 max-w-6xl mx-auto min-h-[80vh]'>
          {
            properties.map((property) => (
              <Property key={property.id} property = {property}/>
          ) )
          }
        </div>         
      }
    </div>
  )
}

export default Cards