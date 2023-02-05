import React from 'react'
import { ReactComponent as FooterLogo } from '../Assets/logo-Footer.svg';
import { ReactComponent as IconTwitter } from '../Assets/icon-twitter.svg';
import { ReactComponent as IconFacebook} from '../Assets/icon-facebook.svg';

function Footer() {
  return (
    <div>
    <div className='flex flex-col w-full bg-bleu justify-center items-center py-[60px] lg:pt-[58px] lg:py-[74px]'>
        <a className='font-[500] text-white text-[12px] tracking-[4.62px] leading-[40px]'>35,000+ ALREADY JOINED</a>
        <span className='max-w-[311px] md:max-w-[408px] text-white text-[28px] md:text-[32px] text-center'>Stay up-to-date with what we’re doing</span>
        <div className='flex flex-col md:flex-row  mt-[32px]'>
            <input className='w-[300px] outline-none rounded-[5px] py-[8px] pl-[10px] text-[14px] text-gray-700' placeholder='Enter your email address'/>
            <button className='md:ml-[16px] mt-[10px] md:mt-0 py-[4px] w-[300px] md:w-[126px] outline-none rounded-[5px] bg-red hover:bg-white font-[500] text-white hover:text-red border-2 border-red hover:border-red text-[14px] tracking-[0.52px] leading-[28px] '>
               Contac Us
            </button>
        </div>
    </div>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:px-[160px] bg-bleumarine '>
            <div className='lg:w-[507px] flex flex-col lg:flex-row justify-center lg:justify-between items-center  text-white'> 
                <FooterLogo className='mb-[39px] mt-[40px] lg:m-0'/>
                <div className='lg:w-[257px] space-y-[32px] lg:space-y-0  flex flex-col lg:flex-row justify-center lg:justify-between items-center text-[13px] font-[300]'>
                    <a href='/' className='hover:text-red'>FEATURES</a>
                    <a href='/' className='hover:text-red'>PRICING</a>
                    <a href='/' className='hover:text-red'>CONTACT</a>
                </div>
            </div>
            <div className='flex space-x-[20px] py-5 my-[30px] lg:my-0'>
                <IconFacebook  />
                <IconTwitter />
            </div>
        </div>
    </div>
  )
}

export default Footer