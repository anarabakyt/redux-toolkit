import React from 'react'
import '../../App.scss'
import { Dots } from 'loading-animations-react';
const Loading = () => {
  return (
    <div className='loading'>
      <Dots />
    </div>
  )
}

export default Loading