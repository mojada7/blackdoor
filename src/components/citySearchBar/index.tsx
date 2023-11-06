import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../public/icon/search.png'

function CitySearchBar() {
  return (
    <div className='w-[60%] h-[2rem] mt-6 pt-[2px] rounded-e-full flex justify-end pe-2 border-2 border-gray-300'>
      <div className='me-4'>
      شهرتو پیدا کن
      </div>
      <div className='mt-[2px]'>
        <Image src={searchIcon} alt='شهرتو پیدا کن' width={20} />
      </div>
    </div>
  )
}

export default CitySearchBar