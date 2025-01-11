import React from 'react'
import IMAGES from '../images/constants'

const Hero3 = () => {
  return (
    <div className='flex flex-wrap justify-center items-center py-12 text-gray-700 px-10 max-sm:text-left'>
         <div>
            <img src={IMAGES.developer}
            className='px-5'
            />
        </div>
        <div className=''>
            <h1 className='text-6xl font-bold pb-5 text-right max-md:text-4xl max-sm:text-3xl'>About me</h1>
            <h1 className='text-xl max-w-xl text-right font-semibold'>John Ivan A. Magtoto is a student at Mabalacat City College with 2 years of experience helping BSIT Students with programming. Specializing in Web Development, Ivan uses that experience to produce websites. By focusing on Web development, Ivan spends his days at school learning and programming. When they’re not at School, Ivan is an avid gamer and loves drinking coffee.</h1>
        </div>  
    </div>
  )
}

export default Hero3