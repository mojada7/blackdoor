import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../public/icon/search.png'

function CitySearchBar() {
  return (
    <div className='w-[90%] md:w-[50%] h-[2rem] mt-6 pt-[2px] rounded-e-full flex justify-end pe-2 border-2 border-gray-300'>
      <input placeholder='... شهرتو پیدا کن' className='me-4 md:me-8 w-full border-none outline-none ps-3 text-end text-sm pt-[2px] text-gray-400'/>
      <div className='mt-[2px] opacity-50'>
        <Image src={searchIcon} alt='شهرتو پیدا کن' width={20} />
      </div>
    </div>
  )
}

export default CitySearchBar