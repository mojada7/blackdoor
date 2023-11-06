import React from 'react'
import CityShortcut from '../cityShortcut'

function CityContainer() {
  return (
    <div className='w-[90%] mt-4 flex justify-center items-center flex-wrap text-gray-500 border-b border-gray-300'>
        <CityShortcut city={'تهران'} />
        <CityShortcut city={'مشهد'} />
        <CityShortcut city={'اصفهان'} />
        <CityShortcut city={'شیراز'} />
        <CityShortcut city={'تبزیر'} />
        <CityShortcut city={'یزد'} />
        <CityShortcut city={'کرمان'} />
        <CityShortcut city={'رشت'} />
        <CityShortcut city={'تبریز'} />
        <CityShortcut city={'بندر عباس'} />
    </div>
  )
}

export default CityContainer