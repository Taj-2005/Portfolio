import Hero from './components/main/Hero'
import './styles.css'


function App() {

  return (
    <div className='h-full w-full  '>
       <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
       </div>
    </div>
  )
}

export default App
