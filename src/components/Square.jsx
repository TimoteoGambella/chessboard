import React from 'react'

export default function Square({isBlack}) {

  return (
    <div className='square' style={{backgroundColor:isBlack?"black":"white"}}>

    </div>
  )
}

