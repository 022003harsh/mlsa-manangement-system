import React from 'react'
import Button from './FilterButton'

const Filter = () => {
  return (
    <div className='flex items-center space-x-[1rem]'>
      <Button value={"Year"} />
      <Button value={"Duration"} />
      <Button value={"Domain"} />
      <div className='cursor-pointer text-[1rem] font-semibold leading-[2.4rem] text-pallete-400'>clear all</div>
    </div>
  )
}

export default Filter
