import React from 'react'
import IMAGES from '../images/constants'
import Button from '../components/Button'

/*
1. E-commerce Website (ReactJS, Tailwind)
2. Spotify Clone
3. Expenses Tracker
4. University Portal Clone
5. Weather Application
6. Todo List
*/ 
const Hero6 = () => {

  return (
    <div className='flex flex-col gap-16 justify-center items-center bg-gray-900 p-10 py-12'>
        <div className='text-white text-center'>
            <h1 className='text-2xl font-bold py-3'>Projects</h1>
            <h1 className='text-5xl font-semibold py-2'>Here's what I've made so far</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-20 max-w-5xl'>
            <div className='flex flex-col justify-center items-center p-10 max-w-lg rounded-lg border border-white text-white min-w-[25vw]'>
                <img
                    src={IMAGES.spotify}
                    className='pb-5 h-28 w-24'
                />
                <h1 className='pb-5 text-2xl font-semibold'>Spotify Clone</h1>
                <Button
                    label={'Learn more'}
                />
            </div>  
            <div className='flex flex-col justify-center items-center rounded-lg border border-white p-10 text-white min-w-[25vw]'>
                <img
                    src={IMAGES.cash}
                    className='pb-5 h-28 w-24'
                />
                <h1 className='pb-5 text-2xl font-semibold'>Expenses Tracker</h1>
                <Button
                    label={'Learn more'}
                />
            </div> 
            <div className='flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw]'>
                <img
                    src={IMAGES.portal}
                    className='pb-5 h-28 w-24'
                />
                <h1 className='pb-5 text-2xl font-semibold'>University Portal Clone</h1>
                <Button
                    label={'Learn more'}
                />
            </div>
            <div className='flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw]'>
                <img
                    src={IMAGES.shop}
                    className='pb-5 h-28 w-24'
                />
                <h1 className='pb-5 text-2xl font-semibold'>e-commerce website</h1>
                <Button
                    label={'Learn more'}
                />
            </div>
            <div className='flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw]'>
                <img
                    src={IMAGES.todo}
                    className='pb-5 h-28 w-24'
                />
                <h1 className='pb-5 text-2xl font-semibold'>To-do List</h1>
                <Button
                    label={'Learn more'}
                />
            </div>
            <div className='flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw]'>
                <img
                    src={IMAGES.weather}
                    className='pb-5 h-28 w-24'
                />
                <h1 className='pb-5 text-2xl font-semibold'>Weather Application</h1>
                <Button
                    label={'Learn more'}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero6