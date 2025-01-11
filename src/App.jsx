import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Hero2 from './pages/Hero2'
import Hero3 from './pages/Hero3'
import Hero4 from './pages/Hero4'
import Hero5 from './pages/Hero5'
import Hero6 from './pages/Hero6'
import Contact from './pages/Contact'

export default function App() {
	return (
	  <main className='flex justify-center items-center flex-col'>
		<Navbar/>
		<section>
			<Hero/>
		</section>
		<section className='w-full bg-gray-900'>
			<Hero2/>
		</section>
		<section>
			<Hero3/>
		</section>
		<section className='w-full bg-gray-900'>
			<Hero4/>
		</section>
		<section className='w-full max-w-4xl'>
			<Hero5/>
		</section>
		<section className='w-full'>
			<Hero6/>
		</section>
		<section>
			<Contact/>
		</section>
		<Footer/>
	  </main>
	)
  }