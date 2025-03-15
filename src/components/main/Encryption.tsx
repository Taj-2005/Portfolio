'use client'
import {motion} from 'framer-motion'
import { slideInFromTop } from '../../../utils/motion'
import lockTop from '../../../public/LockTop.png'
import lockMain from '../../../public/LockMain.png'
import encrypt from '../../../public/encryption.webm'

const Encryption = () => {
  return (
    <div className='flex flex-row relative justify-center min-h-screen  items-center w-full h-full'>
        <div className='absolute w-auto h-auto top-0 z-[5]'>
            <motion.div
            variants={slideInFromTop}
            className='text-[40px] font-medium text-center text-gray-200 ' 
            >
                Performance
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {" "}
                    &
                    {" "}
                </span>
                Security
            </motion.div>
        </div>

        <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
            <div className='flex flex-col items-center group cursor-pointer w-auto h-auto '>
                <img 
                src={lockTop}
                alt='lockTop'
                width={50}
                height={50}
                className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
                />

                <img 
                src={lockMain}
                alt='lockMain'
                width={70}
                height={70}
                className='z-10'
                />
            </div>

 

        </div>

            <div className='absolute z-[20] bottom-[10px] px-[5px]'>
                <div className='cursive text-[20px] font-medium text-center text-gray-300'>
                    Secure your data with end-to-end encryption
                </div>
            </div>

            <div className='w-full flex items-start justify-center absolute'>
                <video 
                loop
                muted
                autoPlay
                playsInline
                preload='false'
                className='w-full h-auto'
                >
                  <source src={encrypt} type='video/webm'></source>
                </video>
            </div>
    </div>
  )
}

export default Encryption
