import React from 'react'
import logo from '../../../public/icon/logo.png'

import CenterFlexCol from '../centerFlexCol'
import Image from 'next/image'

function Logo() {
  return (
    <CenterFlexCol>
      <Image className='mt-4 md:mt-6 lg:mt-8 md:scale-125 lg:scale-150' src={logo} alt='آگهی متاورسی' width={50} />
      <div className='mt-1 md:mt-3 lg:mt-4 mb-6 text-base md:text-lg font-bold text-gray-400'>
        آگهی
      </div>
    </CenterFlexCol>
  )
}

export default Logo