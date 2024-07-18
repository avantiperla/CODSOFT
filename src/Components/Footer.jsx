import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gray-200 z-20'>
      <footer className='flex justify-between items-center max-w-6xl mx-auto'>
        <div className='flex flex-col'>
            <div className='flex justify-between py-10'>
                <div className='flex flex-col w-3/12 gap-4 '>
                    <h1 className='font-bold text-3xl'>RealEstate</h1>
                    <p className='text-sm text-gray-500'>Take a deep dive and browse homes for sale, original neighbourhood  photos, resident reviews and local insights to find what is right for you</p>
                    <button className='text-white bg-slate-900 font-bold w-40 px-8 py-3 rounded-lg'>Get Started</button>
                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-semibold text-lg'>Company</h1>
                    <div className='text-gray-500 flex flex-col gap-3'>
                        <h6>About</h6>
                        <h6>Event Gallery</h6>
                        <h6>Work</h6>
                        <h6>Career</h6>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-semibold text-lg'>Help</h1>
                    <div className='text-gray-500 flex flex-col gap-3'>
                        <h6>Customer Support</h6>
                        <h6>Accessibility</h6>
                        <h6>Terms and Conditions</h6>
                        <h6>Privacy Policy</h6>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-semibold text-lg'>Resources</h1>
                    <div className='text-gray-500 flex flex-col gap-3'>       
                        <h6>Contact Us</h6>
                        <h6>Feedback</h6>
                        <h6>Youtube Playlist</h6>
                    </div>
                </div>
            </div>


            <div className='border-t-2 border-black py-10 text-gray-500'>
                <p>© Copyright 2024, All Rights Reserved by RealEstate</p>
            </div>
        </div>

      </footer>
    </div>

  )
}

export default Footer