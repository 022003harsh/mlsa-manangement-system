import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Filter = () => {
    const [isopen,setisopen] = useState(false)
  return (
    <div className='flex items-center space-x-[1rem]'>
      <Button value={"Year"} />
      <Button value={"Duration"} />
      <Button value={"Domain"} />
      <div className='cursor-pointer text-[1rem] font-semibold leading-[2.4rem] text-[#94A3B8]'>clear all</div>
    </div>
  )
}

export default Filter
