import React from 'react'

const AboutUs = () => {
  return (
    <div className='pt-20'>
      <div className='w-full min-h-[80vh] flex flex-col'>

        <div className='w-full max-h-[35vh] relative bg-yellow-200 '>
          <img src={`${process.env.PUBLIC_URL}/Images/img1.jpg`} className='w-full max-h-[35vh] object-cover'></img>
          <div className='w-full bg-blue-900/50 max-h-[35vh] absolute top-0 '>
            <div className='max-w-6xl mx-auto h-[35vh] flex flex-col py-20'>
              <p className='text-white text-lg font-semibold'>About Us</p>
              <h1 className='text-white text-4xl font-bold'>About Us - Who We Are?</h1>
            </div>
          </div>
        </div>


        <div className='max-w-6xl mx-auto min-h-[45vh] flex  gap-5 my-5'>
          <div className='flex flex-col w-[35vw]  justify-center text-justify '>
            <h1 className='text-slate-800 font-bold text-4xl'>Our Agency Story</h1>
            <p className='text-gray-600 text-sm mt-2'>Check out our company story and work process</p>
            <p className='mt-7'>
              Lorem ipsum dolor sit amet. Eos deserunt perspiciatis ab sapiente beatae et veniam excepturi ut expedita perspiciatis. Qui voluptas magnam At consectetur molestias aut nihil culpa et consequatur voluptatem hic autem velit et veniam asperiores ut quae aperiam.
              <br></br>
              <br></br>
              Ut nostrum voluptas ea eaque reprehenderit sit sunt similique est ipsum ipsum. Sed dignissimos autem est perferendis tempora et accusamus sint et consectetur explicabo et corrupti minima ut similique saepe. Aut adipisci fugiat vel accusamus eius qui voluptatem pariatur.
            </p>
            <button className='text-white bg-slate-800 font-bold w-40 px-5 py-3 text-center rounded-lg mt-7'>More About Us</button>
          </div>

          <div className=' w-[40vw] flex flex-col items-end mr-5 gap-3' >
            <div className=''>
              <img src={`${process.env.PUBLIC_URL}/Images/about2.jpg`} className='h-[45vh] rounded-tl-full'></img>  
            </div>
            <div className=''>
              <img src={`${process.env.PUBLIC_URL}/Images/about3.jpg`} className='h-[45vh] rounded-br-full'></img>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs