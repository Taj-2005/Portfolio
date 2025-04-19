import NavbarLogo from '/NavLogo-min.png'
import { Socials } from '../../../constants/index'
 
const Navbar = () => {
  return (
<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 sm:px-10">
  <div className="h-full w-full flex justify-between items-center px-2 sm:px-[10px] m-auto">
    
    {/* Logo Section */}
    <a href="#" className="flex items-center">
      <img src={NavbarLogo} alt="Navbar Logo" width={50} height={50} className="cursor-pointer hover:animate-spin" style={{ animationDuration: "10s" }} />
      <span className="font-bold ml-2 hidden md:block text-gray-300">
        Web Development
      </span>
    </a>

    {/* Nav Links */}
    <div className="hidden sm:flex items-center justify-between md:mr-20 w-auto h-full">
      <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200 gap-5">
        <a href="#" className="cursor-pointer">Home</a>
        {/* <a href="#about-me" className="cursor-pointer">About me</a> */}
        <a href="#skills" className="cursor-pointer">Skills</a>
        <a href="#projects" className="cursor-pointer">Projects</a>
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex gap-3 sm:gap-5 items-center">
      {Socials.map((social) => (
        <a href={social.link} target="_blank" key={social.name} className="z-20">
          <img
            src={social.src}
            alt={social.name}
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </a>
      ))}
    </div>

  </div>
</div>

  )
}

export default Navbar
