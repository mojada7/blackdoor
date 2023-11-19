import Image from 'next/image'
import React from 'react'
import searchIcon from '../../../public/icon/search.png'
function SearchItemeByWord() {
  return (
    <div className=''>
        <Image src={searchIcon} alt='شهرتو پیدا کن' width={20} />
    </div>
  )
}

export default SearchItemeByWord