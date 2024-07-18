import React,{useState} from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";


const AccordianFaq = ({tit,ans}) => {
  const [open,setOpen]=useState(false)
  

  return (
    <>
    <div className='py-2 border-2  shadow-sm my-5'>
    <button onClick={()=>{setOpen(!open)}} className='flex justify-between w-full '>
        <span className='px-2 font-semibold capitalize text-black text-[1.2rem]'>{tit}</span>
        {open? <BiMinus className=' text-slate-800 mr-3 w-6 h-6 '/> : <AiOutlinePlus className='text-slate-800 mr-3 w-6 h-6 '/>}
        {/* <span>+</span> */}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-[1rem] ${open ? 'grid-rows-[1fr] opacity-100 ':'grid-rows-[0fr] opacity-0' }`}>
        <div className='overflow-hidden px-2 text-[1rem] bg-white mx-2 rounded-sm'>{ans}</div>
      </div>
    </div>
      </>
  )
}

export default AccordianFaq
