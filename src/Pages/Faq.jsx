import React from 'react'
import AccordianFaq from '../Components/AccordianFaq'
import faqdata from '../Data/FaqData.json'
import { NavLink } from 'react-router-dom'



const Faq = () => {
  return (
    <div className='pt-20'>
      <div className='max-w-6xl mx-auto min-h-[80vh]  '>
        {/* main content */}
        <div className='flex flex-row w-full gap-5 mt-10'>

          {/* left */}
          <div className='w-[55vw] flex flex-col justify-center gap-7'>       
              <div className='leading-9'>
                <h1 className='text-base font-bold'>Do you have any</h1>
                <h1 className='text-[3rem] font-bold text-slate-800'>Question?</h1>
              </div>

              <p className='text-[0.9rem] text-justify pr-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
             
              <div className=' flex gap-3'>
                <button className='border-slate-800 border-2 font-bold text-slate-800 py-2 px-4 rounded-lg'>Call US</button>
                <NavLink to='/contactus'><button className='bg-slate-800 font-bold text-white py-2 px-4 rounded-lg'>Send Message</button></NavLink>
              </div>
           
          </div>

          {/* right */}
          <div className=' p-3 '>
            <div className='text-center font-bold text-3xl  pb-4 text-slate-800'>Frequently Asked Question</div>
            {
              faqdata.map((item, idx) => {
                return (
                  <div className=''>
                    <AccordianFaq tit={item.title} ans={item.answer} key={idx} />
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq