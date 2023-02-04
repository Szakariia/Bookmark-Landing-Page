import React from 'react'
import Illustration01  from '../../Assets/illustration-hero.svg'

function SimpleBookmarkFeatures() {
  return (
    <div>
        {/* Simple BookMark */}
        <div className='mt-[80px] mx-[32px] md:ml-[165px] md:mr-[91px] md:mt-[108px] flex flex-wrap-reverse justify-center items-center md:flex-row md:justify-between '>
            {/* LEFT SIDE */}
            <div className='realative z-10 max-w-[540px] max-h-[317px] mt-[71px] text-center  md:text-left'>
                <span className='font-[500] text-bleumarine text-[30px] md:text-[48px] leading-[52px] tracking-[-0.15 px]'> A Simple Bookmark Manager</span>
                <p className='mt-[24px] text-[18px] font-[400] leading-[28px] text-gray-100'>
                    A clean and simple interface to organize your favourite websites. 
                    Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className='flex justify-center items-center md:block space-x-[10px] mt-[42px] mb-10 '>
                    <a href='/' className='bg-bleu drop-shadow-md text-[14px] tracking-[0.25px] text-white px-[24px] py-[10px] font-[500] rounded-[5px] border-2 border-bleu hover:bg-white hover:text-bleu'>
                        Get it on Chrome
                    </a>
                    <a href='/' className='bg-gray-200 drop-shadow-md text-[14px] tracking-[0.25px] text-gray-100 px-[24px] py-[10px] font-[500] rounded-[5px] border-2 border-gray-200 hover:bg-white hover:border-gray-100'>
                        Get it on Firefox
                    </a>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="relative flex-auto">
                <img className="relative z-10 w-[579px] " src={Illustration01}/>
                <div className="absolute z-0 w-[577px] h-[203px] md:w-[1000px] md:h-[352px] bg-bleu rounded-full right-[-336px] top-[100px] md:right-[-655px] md:top-[50px] lg:right-[-500px] lg:top-[137px]"></div>
            </div>
        </div>

        {/* Features */}
        <div className='mt-[90px] mb-[72px] w-full flex justify-center items-center text-center'>
            <div className='max-w-[540px]'>
                <span className='font-[500] text-bleumarine text-[32px] leading-[52px] tracking-[-0.15 px]'> Features</span>
                <p className='mt-[24px] text-[18px] font-[400] leading-[28px] text-gray-100'>
                    Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SimpleBookmarkFeatures