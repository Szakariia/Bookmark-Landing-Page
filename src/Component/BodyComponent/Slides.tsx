import React, { useState } from 'react'
import illustration01 from '../../Assets/illustration-features-tab-1.svg'
import illustration02 from '../../Assets/illustration-features-tab-2.svg'
import illustration03 from '../../Assets/illustration-features-tab-3.svg'
import slideData from './Data/SildesData.json'

function Slides() {

    const [focusButton, setfocusButton] = useState(0)
    slideData[0].Img = illustration01;
    slideData[1].Img = illustration02;
    slideData[2].Img = illustration03;
  return (
    <div className='mb-[140px]'>
        {/* Features */}
        <div className='mt-[90px] mb-[72px] w-full flex justify-center items-center text-center'>
            <div className='max-w-[313px]  md:max-w-[540px]'>
                <span className='font-[500] text-bleumarine text-[28px] md:text-[32px] md:leading-[52px] tracking-[-0.15 px]'> Features</span>
                <p className='mt-[24px] text-[15px] md:text-[18px] font-[400] leading-[28px] text-gray-100'>
                    Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
        </div>

        {/* Slide Button */}
        <div className=' flex flex-col justify-center items-center text-center mb-[50px]'>
            <div className='relative z-10 text-[16px] text-gray-100'>
                <div className='md:hidden relative z-0 top-[-1px] h-[1px] w-[311px] bg-gray-100'/>
                <button 
                    className={`relative z-10 py-[20px] md:pb-[25px] md:pt-[0px] w-[243px] ${!focusButton ? "border-b-4 border-red text-bleumarine " : "hover:text-red"}`}
                    onClick={() => setfocusButton(0)}
                >
                    Simple Bookmarking
                </button>
                <div className='md:hidden relative z-0 top-[-1px] h-[1px] w-[311px] bg-gray-100'/>
                <button 
                    className={`relative z-10 py-[20px] md:pb-[25px] md:pt-[0px] w-[243px] ${focusButton === 1 ? "border-b-4 border-red text-bleumarine " : "hover:text-red"}`}
                    onClick={() => setfocusButton(1)}
                >
                    Speedy Searching
                </button>
                <div className='md:hidden relative z-0 top-[-1px] h-[1px] w-[311px] bg-gray-100'/>
                <button 
                    className={`relative z-10 py-[20px] md:pb-[25px] md:pt-[0px] w-[243px] ${focusButton === 2 ? "border-b-4 border-red text-bleumarine " : "hover:text-red"}`}
                    onClick={() => setfocusButton(2)}
                >
                    Easy Sharing
                </button>
                <div className='md:hidden relative z-0 top-[-1px] h-[1px] w-[311px] bg-gray-100'/>

            </div>
            <div className='hidden md:block relative z-0 top-[-1px] h-[1px] w-[730px] bg-gray-100'/>
        </div>

        {/* Slide Body */}
        <div className='mt-[80px] mx-[32px] md:ml-[165px] md:mr-[91px] md:mt-[108px] flex flex-wrap justify-center items-center md:flex-row md:justify-between'>

            {/* LEFT SIDE */}
            <div className="relative flex-auto">
                <img className="relative z-10 w-[579px] " src={slideData[focusButton].Img}/>
                <div className="hidden sm:block absolute z-0 w-[577px] h-[203px] md:w-[1000px] md:h-[352px] bg-bleu rounded-full left-[-336px] top-[100px] md:left-[-655px] md:top-[50px] lg:left-[-500px] lg:top-[137px]"></div>
            </div>

            {/* RIGHT SIDE */}
            <div className='realative z-10 max-w-[540px] max-h-[317px] mt-[80px] md:mt-[120px] text-center  md:text-left'>
                <span className='font-[500] text-bleumarine text-[30px] md:text-[48px] leading-[52px] tracking-[-0.15 px]'> {slideData[focusButton].Title}</span>
                <p className='mt-[24px] text-[18px] font-[400] leading-[28px] text-gray-100'>
                    {slideData[focusButton].Desc}
                </p>
                <div className='flex justify-center items-center md:block space-x-[10px] mt-[42px] mb-10 '>
                    <a href='/' className='bg-bleu drop-shadow-md text-[14px] tracking-[0.25px] text-white px-[24px] py-[10px] font-[500] rounded-[5px] border-2 border-bleu hover:bg-white hover:text-bleu'>
                        More Info
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slides