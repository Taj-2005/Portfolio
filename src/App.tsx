import Encryption from './components/main/Encryption'
import Footer from './components/main/Footer'
import Hero from './components/main/Hero'
import Navbar from './components/main/Navbar'
import Projects from './components/main/Projects'
import Skills from './components/main/Skills'
import './styles.css'


function App() {

  return (
    <div className='h-full w-full  '>
      < Navbar />
       <div className='flex flex-col  gap-20'>
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer /> 
       </div>
    </div>
  )
}

export default App
