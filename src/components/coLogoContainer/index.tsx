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
                <Image className='md:scale-75 scale-50' src={pic1} alt='' width={50}/>
                <div className='mt-2 md:mt-3 text-xs md:text-sm'>سوسیالیست</div>
            </CenterFlexCol>
            <CenterFlexCol>
                <Image className='md:scale-75 scale-50' src={pic2} alt='' width={50}/>
                <div className='mt-2 md:mt-3 text-xs md:text-sm'>لبه تکنولوژی</div>
            </CenterFlexCol>
            <CenterFlexCol>
                <Image className='md:scale-75 scale-50' src={pic3} alt='' width={50}/>
                <div className='mt-2 md:mt-3 text-xs md:text-sm'>شفاف</div>
            </CenterFlexCol>
        </CenterFlex>
    </div>

  )
}

export default CologoContainer