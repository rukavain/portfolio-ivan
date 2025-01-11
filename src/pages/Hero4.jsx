import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../components/Button'

const Hero2 = () => {
  const [name, setName] = useState('')
  const [predictedAge, setPredictedAge] = useState(null)

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data);
  })
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        fetchData();
    }
  }

  return (
    <section className='flex flex-col justify-center items-center text-white py-9 px-10'>
        <h1 className='text-5xl font-bold text-center py-5 max-sm:text-4xl max-md:text-5xl'>What age are you going to die?</h1>
        <div className='flex flex-wrap justify-center align-center gap-16 py-10'>
            <input 
            type='text'
            onKeyPress={handleKeyPress}
            className='py-3 px-3 rounded-lg text-gray-700'
            placeholder='Enter first name'
            onChange={(event)=>{
                setName(event.target.value)
            }}
            />
                <button>
                    <Button
                    onclick={fetchData}
                    label='Predict Age'
                    backgroundColor='transparent'
                    textColor='text-white'
                    borderColor='border-gray-200'/>
                </button>
        </div>
        <div className='flex flex-wrap px-4 max-md:text-xl justify-start items-center gap-16 text-4xl'>
            <h1 className='font-semibold text-center max-w-4xl py-10'>Name: {predictedAge?.name}</h1>
            <h1 className='font-semibold text-center max-w-4xl py-10'>Age: {predictedAge?.age}</h1>
        </div>
        
    </section>
  )
}

export default Hero2    