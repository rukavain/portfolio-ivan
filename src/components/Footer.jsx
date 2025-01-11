import React from 'react'
import IMAGES from '../images/constants'

const Footer = () => {

  return (
    <footer className='bg-gray-900 text-white bottom-0 flex flex-col justify-center items-center py-4 w-full'>
        <div className='flex flex-1 justify-center items-center gap-12 py-4 text-6xl px-8'>
             <a href="/"><img src={IMAGES.github} height={25} width={25}/></a>
             <a href="/"><img src={IMAGES.gmail} height={25} width={25}/></a>
             <a href="/"><img src={IMAGES.linkedin} height={25} width={25}/></a>                                        
        </div>
        <p className='pt-2 text-sm'>
          &copy;ivan.dev@2023 
        </p>
    </footer>
  )
}

export default Footer