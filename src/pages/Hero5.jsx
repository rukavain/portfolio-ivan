import React from 'react'
import IMAGES from '../images/constants'

const Hero5 = () => {
    
  return (
    <div className='flex flex-col flex-wrap justify-center items-center py-16 text-gray-700'>
        <div className='flex flex-col justify-center items-center px-5  pb-10'>
            <h1 className='text-xl font-semibold'>About</h1>
            <h1 className='text-3xl pb-6 font-bold text-center'>Let me introduce myself</h1>
            <span className='flex flex-row justify-center items-center'>
                <img
                src={IMAGES.profile}
                className='rounded-full h-24 w-24 mx-10 max-md:hidden'
            />
            <p className='py-10 max-w-lg first-letter:text-left max-md:text-center'>I started learning web development recently and I am getting the hang of it. Making websites is fun and cool because I learn more things about web development as I make more projects on my own.</p>
            </span>
        </div>
        <div className='flex flex-row flex-wrap justify-between max-md:justify-center items-center px-10 w-full py-10'>
            <div className='text-gray-700 text-left max-md:text-center'>   
                <h1 className='font-bold text-2xl pb-10'>PROFILE</h1>

                <h1 className='font-semibold'>FULLNAME</h1>
                <p className='pb-6'>John Ivan A. Magtoto</p>

                <h1 className='font-semibold'>BIRTHDATE</h1>
                <p className='pb-6'>October 03, 2002</p>
                
                <h1 className='font-semibold'>EMAIL</h1>
                <p className='pb-6'>samplemail123@email.com</p>

                <h1 className='font-semibold'>PHONE NUMBER</h1>
                <p className='pb-6'>+639123456789</p>
            </div>
            <div>
                <img 
                    src={IMAGES.contact}
                    className='h-92 w-96 max-md:hidden'   
                />
            </div>
        </div>
    </div>
  )
}

export default Hero5