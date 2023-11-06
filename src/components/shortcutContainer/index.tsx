import React from 'react'
import CenterFlex from '../centerFlex'
import ShortcutIcon from '../shortcutIcon'

function ShortcutContainer() {
  return (
    <div className='w-full border-b-2 border-gray'>
      <CenterFlex>
          <ShortcutIcon>ثبت آگهی</ShortcutIcon>
          <ShortcutIcon>بازار اصلی</ShortcutIcon>
          <ShortcutIcon>بگرد دنبالش</ShortcutIcon>
          <ShortcutIcon>درباره ی اینجا</ShortcutIcon>
      </CenterFlex>
    </div>

  )
}

export default ShortcutContainer