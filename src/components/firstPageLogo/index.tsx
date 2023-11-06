import React from 'react'

import CenterFlexCol from '../centerFlexCol'

function Logo() {
  return (
    <CenterFlexCol>
      <div className='h-12 w-8 bg-blue-600 mt-10 border-[3px] border-sky-200'>
        <div className='bg-white h-2 w-[2px]'>

        </div>
        <div className='bg-white h-1 w-1 rounded-full mt-3 ms-5'>

        </div>
        <div className='bg-white h-2 w-[2px] mt-3'>

        </div>
      </div>
      <div className='mt-1 mb-6 text-sm md:text-base font-mono font-bold text-blue-600'>
        BlueDoor
      </div>
    </CenterFlexCol>
  )
}

export default Logo