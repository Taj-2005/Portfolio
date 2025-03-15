import blackHole from '../../../public/blackhole.webm'
import HeroContent from '../sub/Herocontent'

function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full '>
      <video
      autoPlay
      muted
      loop
      className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
      >
        <source src={blackHole} type='video/webm'></source>
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero
