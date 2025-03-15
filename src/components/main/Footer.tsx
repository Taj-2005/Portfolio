'use client'

import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from 'react-icons/rx'

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>




                    <div className='font-bold text-[16px]'>Community</div>

                    <a href='https://github.com/Taj-2005' target='_blank' className='flex flex-row items-center my-[15px] cursor-pointer z-20'>
                        <RxGithubLogo />
                        <p className='text-[15px] ml-[6px]'>Github</p>
                    </a>

                    <a href='https://discord.com/users/taj.786' target='_blank' className='flex flex-row items-center my-[15px] cursor-pointer z-20'>
                        <RxDiscordLogo />
                        <p className='text-[15px] ml-[6px]'>Discord</p>
                    </a>
                
                </div>



                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Social Media</div>
                    <a href="https://www.linkedin.com/in/tajuddinshaik786/" target='_blank' className='flex flex-row items-center my-[15px] cursor-pointer z-20'>
                        <RxLinkedinLogo />
                        <p className='text-[15px] ml-[6px]'>LinkedIn</p>
                    </a>

                    <a href='https://www.instagram.com/tajuddinshaik_6/' target='_blank' className='flex flex-row items-center my-[15px] cursor-pointer z-20'>
                        <RxInstagramLogo />
                        <p className='text-[15px] ml-[6px]'>Instagram</p>
                    </a>
                </div>



  
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>About</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>Become Sponsor</span>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>Learning about me</span>
                    </p>

                    <a href='mailto:tajuddinshaik786r@gmail.com' target='_black' className='flex flex-row items-center my-[15px] cursor-pointer z-20'>
                        <p className='text-[15px] ml-[6px]'>tajuddinshaik786r@gmail.com</p>
                    </a>


                </div>
            </div>


            <div className="mb-[20px] text-15px text-center ">
                &copy; Tajuddin Shaik  2025 All rights reserved
            </div>




        </div>
    </div>
  )
}

export default Footer
