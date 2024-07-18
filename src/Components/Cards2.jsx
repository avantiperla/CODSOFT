import React from 'react'

const Cards2 = () => {
  return (
    <div className='mt-10 mb-10 '>
        <div className='max-w-6xl mx-auto min-h-[60vh] '>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-5xl font-bold text-center'>Local expertise for <br></br>luxury homes</h1>
                <p className='text-gray-500 text-center'>Our agents have years of experience buying and selling high-end home.<br></br> Get the highest level of service from our best agents</p>
            </div>

            <div className='grid grid-cols-3 gap-8 mt-10'>
                <div className='flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-7 px-6 gap-4 items-center rounded-tl-3xl rounded-br-3xl'>
                    <h1 className='text-3xl font-bold'>Buy a home</h1>
                    <p className='text-base text-center'>Find your place with an immersive photo experience and the most listing, including things you won't find anywhere else.</p>
                </div>

                <div className='flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-7 px-6 gap-4 items-center rounded-tl-3xl rounded-br-3xl'>
                    <h1 className='text-3xl font-bold'>Sell a home</h1>
                    <p className='text-base text-center'>No matter what path you take to sell your home, we can help you navigate a successfull sale.</p>
                </div>

                <div className='flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-7 px-6 gap-4 items-center rounded-tl-3xl rounded-br-3xl'>
                    <h1 className='text-3xl font-bold'>Rent a home</h1>
                    <p className='text-base text-center'>We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards2