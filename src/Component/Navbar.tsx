import React, { useState } from 'react'
import { ReactComponent as BookLogo } from '../Assets/logo-bookmark.svg';
import { ReactComponent as BookLogoWhite } from '../Assets/logo-bookmark-white.svg';
import { ReactComponent as IconClose } from '../Assets/icon-close.svg';
import { ReactComponent as IconMenu } from '../Assets/icon-menu.svg';
import { ReactComponent as IconTwitter } from '../Assets/icon-twitter.svg';
import { ReactComponent as IconFacebook} from '../Assets/icon-facebook.svg';


function Navbar() {

    const [showMenu, setshowMenu] = useState(false)
  return (
    <div>
        {!showMenu &&
            <div className='flex justify-between items-center px-[32px] pt-[48px] lg:pl-[171px] lg:pr-[165px]'>
                <div><BookLogo /></div>
                <div>
                <div className='hidden md:block space-x-[48px] text-[13px] font-[300]'>
                        <a href='/' className='hover:text-red'>FEATURES</a>
                        <a href='/' className='hover:text-red'>PRICING</a>
                        <a href='/' className='hover:text-red'>CONTACT</a>
                        <a href='/' className='bg-red drop-shadow-md text-white px-[32px] py-[12px] font-[500] rounded-[5px] border-2 border-red hover:bg-white hover:text-red'>
                            LOGIN
                        </a>
                    </div>
                    <div className='md:hidden'>
                        <IconMenu onClick={() => setshowMenu(true)}/>
                    </div>
                </div>
            </div>
        }
    {/* // Mobile Menu */}
        {showMenu &&
            <div className='absolute z-30 w-screen h-screen bg-bleumarine bg-opacity-[90%] py-[40px] text-white'>
                <div className='w-screen flex justify-between items-center px-[33px] mb-[40px]'>
                    <BookLogoWhite />
                    <IconClose onClick={() => setshowMenu(false)} />
                </div>
                <div className='grid grid-col justify-center items-center text-[20px] font-[300]'>
                    <div className='h-[1px] w-[309px] m-auto bg-white bg-opacity-25'/>
                    <a href='/' className='hover:text-red mx-auto my-[24px]'>FEATURES</a>
                    <div className='h-[1px] w-[309px] m-auto bg-white bg-opacity-25'/>
                    <a href='/' className='hover:text-red mx-auto my-[24px]'>PRICING</a>
                    <div className='h-[1px] w-[309px] m-auto bg-white bg-opacity-25'/>
                    <a href='/' className='hover:text-red mx-auto my-[24px]'>CONTACT</a>
                    <div className='h-[1px] w-[309px] m-auto bg-white bg-opacity-25'/>
                    <a href='/' className='my-[24px] text-white px-[124px] py-[12px] font-[500] rounded-[5px] border-2 border-white '>
                        LOGIN
                    </a>
                    <div className='w-full flex justify-center items-center absolute bottom-[60px]  space-x-[40px]'>
                        <IconFacebook />
                        <IconTwitter />
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Navbar