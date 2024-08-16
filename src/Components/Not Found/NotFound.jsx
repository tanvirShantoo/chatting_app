import Lottie from 'lottie-react'
import React from 'react'
import NotFoundAni from '../../../public/Animation/NotFound.json'

const NotFound = () => {
  return (
    <div className='w-[500px] m-auto'>
      <Lottie animationData={NotFoundAni}/>
     
    </div>
  )
}

export default NotFound
