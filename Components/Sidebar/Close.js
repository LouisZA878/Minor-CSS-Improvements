import React from 'react'

import useStatus from '@/Store/useStatus'

const Close = () => {
const { status, statusSwap } = useStatus()
  return (
    <li>
    <button id='toggleBtn' onClick={statusSwap}>
      <svg className={status ? 'close' : ''} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e8eaed"><path d="M401.67-480.67 208.67-674l46.66-46.67 240 240-240 240-46.66-46.66 193-193.34Zm256.66 0L465.33-674 512-720.67l240 240-240 240-46.67-46.66 193-193.34Z"/></svg>
    </button>
  </li>
  )
}

export default Close