import React from 'react'

function ShortcutIcon({children} : {children : React.ReactNode}) {
  return (
    <div className='w-[20%] h-[4rem] border-solid text-center text-xs md:text-base'>{children}</div>
  )
}

export default ShortcutIcon