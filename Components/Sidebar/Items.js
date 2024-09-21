'use client'

import { useState } from 'react'
import useStatus from '@/Store/useStatus'

const Items = () => {

const [dropStatus, setDropStatus] = useState({
    todo: false,
  })
const { status, statusSwap } = useStatus()

// refactor this to be used on multiple list items
const handleClick = () => {
  setDropStatus(prev => {
    return {
      ...prev,
      todo: !prev.todo
  }
  })
  if(!status) {
    statusSwap()
  }
}
  
  return (
    <li>
    <button
      className="dropdown-btn"
      onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m221-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm339 353q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Z"/></svg>
      <span>
        Drop-Down
      </span>
      <svg className={dropStatus.todo ? 'open' : ''} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
    </button>
    <ul className={`sub-menu ${dropStatus.todo ? 'show' : ''}`}>
      <div>
        <li><a>Todo 1</a></li>
        <li><a>Todo 2</a></li>
        <li><a>Todo 3</a></li>
      </div>
    </ul>
  </li>
  )
}

export default Items