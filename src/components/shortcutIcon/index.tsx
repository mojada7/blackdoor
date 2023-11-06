import React from 'react'

function ShortcutIcon({children} : {children : React.ReactNode}) {
  return (
    <div className='w-[20%] border-solid text-center text-xs md:text-base pb-2'>{children}</div>
  )
}

export default ShortcutIcon