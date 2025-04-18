import NavbarLogo from '/NavLogo-min.png'
import { Socials } from '../../../constants/index'
 
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="h-full w-full flex flex-row justify-between items-center px-[10px] m-auto">
        <a href="#" className="h-auto w-auto flex flex-row items-center">
          <img src={NavbarLogo} alt="Navbar Logo" width={70} height={70} className="cursor-pointer hover:animate-spin" style={{ animationDuration: "10s" }} />
          <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
            Web Development
          </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href="#" className='cursor-pointer'>Home</a>
            <a href="#about-me" className='cursor-pointer'>About me</a>
            <a href="#skills" className='cursor-pointer'>Skills</a>
            <a href="#projects" className='cursor-pointer'>Projects</a>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          {Socials.map((social) => (
            <a href={social.link} target='blank' className='z-20 cursor-po'>
              <img
              src={social.src}
              alt={social.name}
              key={social.name }
              width={24}
              height={24}>
              </img>
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Navbar
