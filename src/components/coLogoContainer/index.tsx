import React from 'react'
import CenterFlex from '../centerFlex'
import CenterFlexCol from '../centerFlexCol'
import pic1 from '../../../public/icon/fair.png'
import pic2 from '../../../public/icon/futue.png'
import pic3 from '../../../public/icon/transparency.png'
import Image from 'next/image'

function CologoContainer() {
  return (
    <div className='w-[60%] md:w-[40%] lg:w-[20%] pt-4 opacity-70'>
        <CenterFlex>
            <CenterFlexCol>
                <Image className='lg:scale-100 md:scale-75 scale-50' src={pic1} alt='' width={40}/>
                <div className='md:mt-3 lg:mt-1 text-[8px] md:text-xs'>سوسیالیست</div>
            </CenterFlexCol>
            <CenterFlexCol>
                <Image className='lg:scale-100 md:scale-75 scale-50' src={pic2} alt='' width={40}/>
                <div className='md:mt-3 lg:mt-1 text-[8px] md:text-xs'>لبه تکنولوژی</div>
            </CenterFlexCol>
            <CenterFlexCol>
                <Image className='lg:scale-100 md:scale-75 scale-50' src={pic3} alt='' width={40}/>
                <div className='md:mt-3 lg:mt-1 text-[8px] md:text-xs'>شفاف</div>
            </CenterFlexCol>
        </CenterFlex>
    </div>

  )
}

export default CologoContainer