import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../Assets/icon-arrow.svg'
import { ReactComponent as ActiveArrow } from '../../Assets/icon-Activearrow.svg'

import FaqData from './Data/FAQ.json'


function FAQ() {
    const [Data, setData] = useState(FaqData)
    
    const ShowDesc = (index: number) => {
        const newData = [...Data]
        newData[index].showDesc = newData[index].showDesc ? false : true
        setData(newData)
    }

return (
    <div className='flex flex-col justify-center items-center mb-[100px] '>
    {/* FAQ Header */}
        <div className='mt-[90px] mb-[72px] w-full flex justify-center items-center text-center '>
            <div className='max-w-[313px]  md:max-w-[540px]'>
                <span className='font-[500] text-bleumarine text-[28px] md:text-[32px] md:leading-[52px] tracking-[-0.15 px]'> Frequently Asked Questions</span>
                <p className='mt-[24px] text-[15px] md:text-[18px] font-[400] leading-[28px] text-gray-100'>
                    Here are some of our FAQs. If you have any other questions you’d
                    like answered please feel free to email us.
                </p>
            </div>
        </div>

    {/* FAQ Body */}
    {Data.map((value, index) => 
        <div key={index} className='relative w-[313px] md:w-[540px] '>
            <div className='w-full h-[1px] bg-bleumarine opacity-[15%]'/>
            <div className=' group w-full flex justify-between items-center space-y-auto' onClick={() => ShowDesc(index)}>
                <span className='py-4 font-[400] text-bleumarine group-hover:text-red text-[18px] tracking-[-0.15px]'>{value.Title}</span>
                {value.showDesc ? <ActiveArrow className=' mr-4' /> : <Arrow className=' mr-4'/>}
            </div>
            { value.showDesc ? <p className="my-[6px] text-[15px] font-[400] leading-[28px] text-gray-100">{value.Desc}</p> : ""}
        </div>
    )}
        <div className='w-[313px] md:w-[540px] h-[1px] bg-bleumarine opacity-[15%]'/>
        <div className='flex justify-center items-center md:block space-x-[10px] mt-[42px] mb-10 '>
            <a href='/' className='bg-bleu drop-shadow-md text-[14px] tracking-[0.25px] text-white px-[24px] py-[10px] font-[500] rounded-[5px] border-2 border-bleu hover:bg-white hover:text-bleu'>
                More Info
            </a>
        </div>
    </div>
  )
}

export default FAQ