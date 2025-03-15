import { Frontend_skill, Backend_skill, Full_stack, Programming_Skills, Skill_data } from "../../../constants"
import cardsVideo from '../../../public/cards-video.webm'
import SkillDataProvider from "../sub/SkillDataProvider"
import SkillText from "../sub/SkillText"

const Skills = () => {
  return (
    <section 
    id='skills' 
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    style={{transform: "scale(0.9)"}}>
        <SkillText /> 
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Skill_data.map((image, index) => (
                 <SkillDataProvider 
                 key={index}
                 src={image.Image}
                 width={image.width}
                 height={image.height}
                 index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Frontend_skill.map((image, index) => (
                 <SkillDataProvider 
                 key={index}
                 src={image.Image}
                 width={image.width}
                 height={image.height}
                 index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Programming_Skills.map((image, index) => (
                 <SkillDataProvider 
                 key={index}
                 src={image.Image}
                 width={image.width}
                 height={image.height}
                 index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Backend_skill.map((image, index) => (
                 <SkillDataProvider 
                 key={index}
                 src={image.Image}
                 width={image.width}
                 height={image.height}
                 index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Full_stack.map((image, index) => (
                 <SkillDataProvider 
                 key={index}
                 src={image.Image}
                 width={image.width}
                 height={image.height}
                 index={index}
                 />
            ))}
        </div>

        <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video 
                className="w-full h-auto"
                preload="false"
                playsInline
                loop
                muted
                autoPlay
                src={cardsVideo}
                />
            </div>
        </div>
      
    </section>
  )
}

export default Skills
