import React from 'react'
import mainbannerbg from '../assets/main_banner_bg.png';
import mainbannerbgsm from '../assets/main_banner_bg_sm.png';
import WhiteArrowIcon from '../assets/white_arrow_icon.svg';
const MainBanner = () => {
  return (
    <div className='relative'>
     <img src={mainbannerbg} alt="banner" className='w-full hidden md:block' />
<img src={mainbannerbgsm} alt="banner" className='w-full md:hidden' />

<div>
    <h1>Your Essential just a click away!</h1>
</div>
<div>
    <link  to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull trasition rounded text-white cursor-pointer'>
    <img className='md:hidden transition group-focus:translation' src={WhiteArrowIcon} alt="arrow"/>
    
    </link>
    <link  to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull trasition rounded text-white cursor-pointer'>
    <img className='md:hidden transition group-focus:translation' src={WhiteArrowIcon} alt="arrow"/>
    
    </link>
</div>
    </div>
  )
}

export default MainBanner
