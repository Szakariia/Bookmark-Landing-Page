import React from 'react'
import ExtensionData from './Data/ExtensionData.json'
import Logo01 from '../../Assets/logo-chrome.svg'
import Logo02 from '../../Assets/logo-firefox.svg'
import Logo03 from '../../Assets/logo-opera.svg'

function Extension() {

    ExtensionData[0].Img = Logo01;
    ExtensionData[1].Img = Logo02;
    ExtensionData[2].Img = Logo03;
  return (
    <div>
        {/* extension */}
        <div className='mt-[90px] mb-[72px] w-full flex justify-center items-center text-center'>
            <div className='max-w-[313px]  md:max-w-[540px]'>
                <span className='font-[500] text-bleumarine text-[28px] md:text-[32px] md:leading-[52px] tracking-[-0.15 px]'> Download the extension</span>
                <p className='mt-[24px] text-[15px] md:text-[18px] font-[400] leading-[28px] text-gray-100'>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
                </p>
            </div>
        </div>

        {/* install extension */}
        <div className='mt-[90px] mb-[72px] w-full flex flex-wrap justify-center items-center text-center md:space-x-[37px] space-y-[37px] md:space-y-0'>
            {/* Map for the ExtensionData */}
            {ExtensionData.map((value, index) =>
                <div key={index} className='w-[280px] h-[371px] shadow-xl rounded-[15px] divide-y divide-dashed divide-bleu divide-opacity-[25%]'>
                    <div className='h-[271px] flex flex-col justify-center items-center'>
                        <img src={value.Img} alt={value.Title}/>
                        <span className='mt-[32px] font-[500] text-bleumarine text-[20px] tracking-[-0.15px]'>{value.Title}</span>
                        <p className='mt-[6px] text-[15px] font-[400] leading-[28px] text-gray-100'>{value.Desc}</p>
                    </div>
                    <div className='h-[96px] flex justify-center items-center'>
                        <a href='/' className='bg-bleu w-[232px] drop-shadow-md text-[14px] tracking-[0.25px] text-white px-[24px] py-[10px] font-[500] rounded-[5px] border-2 border-bleu hover:bg-white hover:text-bleu'>
                            Add & Install Extension
                        </a>
                    </div>
                </div>
            )}
        </div>
        
    </div>
  )
}

export default Extension