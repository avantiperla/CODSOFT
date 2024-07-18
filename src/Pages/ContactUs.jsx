import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiMessage2Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { MdDeveloperMode } from "react-icons/md";
import { CiMail } from "react-icons/ci";



const ContactUs = () => {
  return (
    <div className='pt-20'>
      <div className='max-w-6xl mx-auto min-h-[80vh] flex flex-col '>
        <div className='text-center my-10 '>
          <h1 className='text-4xl font-bold'>Contact Us</h1>
          <h6 className='text-base text-gray-400 mt-2'>We'd love to talk about how we can help you</h6>
        </div>

        <div className=' flex mb-10'>
          <form className=' py-7 px-5 w-[40vw] border-gray-100 border-2 max-h-[75vh] ml-10'>
                <h1 className='text-2xl font-semibold mb-5 '>Send us a Message</h1>
                <div className='mb-5'>
                    <label className='text-sm'>Full Name</label>
                    <input type='text' placeholder='Avanti Perla' className=' w-full p-2 text-sm outline-gray-200 ' required></input>
                </div>
                <div className='mb-5'>
                    <label className=' text-sm'>Email</label>
                    <input type='email' placeholder='example@yourmail.com' className=' w-full p-2 text-sm  outline-gray-200' required></input>
                </div>
                <div className='mb-5'>
                    <label className=' text-sm'>Phone</label>
                    <input  type='number' placeholder='+91 9987956881' className=' w-full p-2 text-sm outline-gray-200 ' required></input>
                </div>
                <div className='mb-5'>
                    <label for="large-input" className=' text-sm'>Message</label>
                    <textarea  type='text' rows='2' placeholder='Type your message here' className=' w-full p-2 text-sm outline-gray-200 max-h-[3rem]' required></textarea>
                </div>

                <button className='px-6 py-3 rounded-lg text-base font-medium bg-slate-800 text-white'>Send Message</button>
           
          </form>

          <div className='flex flex-col w-[50vw] gap-10  py-10 pl-24'>       
              <div>
                <h1 className='text-lg font-semibold flex items-center gap-3'><span><RxQuestionMarkCircled className='w-6 h-6'/></span>Knowledgebase</h1>
                <p className='text-sm text-gray-400 pl-9'>We're here to help with any questions</p>
                <h5 className='flex  text-sm gap-2 pl-9 hover:cursor-pointer'>Contact Support<span className='self-center pt-1'><FaArrowRightLong/></span></h5>
              </div>

              <div >
                <h1 className='text-lg font-semibold flex items-center gap-3'><span><RiMessage2Line className='w-6 h-6'/></span>FAQ</h1>
                <p className='text-sm text-gray-400 pl-9'>Search our faq for answers to anything you might ask</p>
                <NavLink to='/faq'><h5 className='flex  text-sm gap-2 pl-9'>Visit FAQ<span className='self-center pt-1'><FaArrowRightLong/></span></h5></NavLink>
              </div>  

              <div >
                <h1 className='text-lg font-semibold flex items-center gap-3'><span><MdDeveloperMode className='w-6 h-6'/></span>Develpers API's</h1>
                <p className='text-sm text-gray-400 pl-9'>Check out our develpers quickstart guide</p>
                <h5 className='flex  text-sm gap-2 pl-9 hover:cursor-pointer'>Contact Sales<span className='self-center pt-1'><FaArrowRightLong/></span></h5>
              </div> 

              <div >
                <h1 className='text-lg font-semibold flex items-center gap-3'><span><CiMail className='w-6 h-6'/></span>Contact us by email</h1>
                <p className='text-sm text-gray-400 pl-9'>If you wish to write us an email instead please use</p>
                <h5 className='flex  text-sm gap-2 pl-9 hover:cursor-pointer'>example@site.gmail.com</h5>
              </div>      
            


          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs