import React from 'react'
import IMAGES from '../images/constants'

export const Card = (


) => {
  return (

    <div className='flex justify-center items-center border rounded-md border-white max-w-5xl'>
            <div className='flex flex-col justify-center items-center p-10 text-white'>
                <img
                    src={IMAGES.spotify}
                    height={150}
                    width={150}
                    className='pb-5'
                />
                <h1 className='pb-5 text-2xl font-semibold'>Spotify Clone</h1>
                <Button
                    label={'Learn more'}
                />
            </div>  
      </div>      
  )
}
