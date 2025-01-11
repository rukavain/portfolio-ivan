import React from 'react'
import { headerLogo, Hamburger } from '../images/icons'


const Navbar = () => {  
  
const listItems = [
  {href: '#home', label: 'Home'},
  {href: '#about', label:'About'},
  {href: '#contact', label: 'Contact'}
]

return (
    <nav className='flex justify-between items-center py-5 px-16 mx-auto w-full bg-gray-900'>
      <div>
        <a href="/">
         <img
          src={ headerLogo }
          alt='header-logo'
          height={40}
          width={40}
          />
        </a>
      </div>
      <ul className='flex gap-16 max-lg:hidden'>
        {listItems.map((item)=>(
          <a key={item.index} href={item.label}>
            <li className='text-md cursor-pointer text-white font-semibold font-montserrat'>{item.label}</li>
          </a>
        ))} 
      </ul>
      <div className='hidden max-lg:block'>
          <img 
            src={ Hamburger }
            alt='hamburger'
            width={30}
            height={30}
          />
      </div>
        
    </nav>
  )
}

export default Navbar