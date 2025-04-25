import React from 'react'
import mainbannerbg from '../assets/main_banner_bg.png';
import mainbannerbgsm from '../assets/main_banner_bg_sm.png';
import WhiteArrowIcon from '../assets/white_arrow_icon.svg';
import BlackArrowIcon from '../assets/black_arrow_icon.svg'
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className='relative'>
     <img src={mainbannerbg} alt="banner" className='w-full hidden md:block' />
<img src={mainbannerbgsm} alt="banner" className='w-full md:hidden' />

<div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
    <h1 className='text-3xl nd:text-4xl lg:text-5xl font-bond text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
     >Your Essential just a click away!</h1>


<div className='flex items-center t-6 fomt-medium'>
    <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition rounded text-white cursor-pointer'>
        Shop now
        <img className='md:hidden transition group-focus:translate-x-1' src={WhiteArrowIcon} alt="arrow"/>
    </Link>
    <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
        Explore deals
        <img className='transition group-hover:translate-x-1' src={BlackArrowIcon} alt="arrow"/>
    </Link>
</div>
</div>
    </div>
  )
}

export default MainBanner
