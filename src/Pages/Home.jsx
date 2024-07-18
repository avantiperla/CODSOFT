import React from 'react'
import Cards from '../Components/Cards'
import { products } from '../data'
import { RiDownload2Fill } from "react-icons/ri";
import Cards2 from '../Components/Cards2';


const Home = () => {
  return (
    <div className='pt-20'>
        <div className='max-w-6xl mx-auto min-h-[80vh] flex flex-col '>
            <div className='flex justify-between mb-10 '>
                <div className='w-5/12 flex flex-col  pt-28'>
                    <div>
                        <h1 className='font-bold text-6xl'>Find your home with the people you trust</h1>
                    </div>

                    <p className='w-7/12 py-10'>Join with <span className='font-semibold'>5000+ Agents</span> and Get home recommendations right now</p>

                    <div className='flex  gap-8'> 
                        <button className='text-white bg-slate-900 font-bold px-8 py-3 rounded-lg'>Get Started</button>
                        <button className='bg-white font-bold py-3 rounded-lg flex items-center gap-2'><span><RiDownload2Fill className='font-bold'/></span>Download Android App</button>      
                    </div>

                </div>


                <div className='w-6/12 '>
                    <img src={`${process.env.PUBLIC_URL}/Images/bldg.png`} className='w-full'></img>
                </div>
            </div>


            <Cards properties = {products}/>

            <Cards2/>

        </div>
    </div>
  )
}

export default Home