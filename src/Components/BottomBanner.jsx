import React from 'react'
import { assets } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'  />
      <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full hidden md:hidden'  />

          </div>
  )
}

export default BottomBanner
