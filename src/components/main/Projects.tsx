'use client'

import ProjectCard from "../sub/ProjectCard"
import nextWeb from '../../../public/NextWebsite.png'
import cardImg from '../../../public/CardImage.png'
import space from '../../../public/SpaceWebsite.png'


const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard 
            src={nextWeb}
            title="Next Website"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati reprehenderit alias amet quisquam dolore fuga quibusdam libero porro perferendis non inventore enim quo, voluptates repudiandae vero nulla, officia aut?"
            />

            <ProjectCard 
            src={cardImg}
            title="Card Image"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati reprehenderit alias amet quisquam dolore fuga quibusdam libero porro perferendis non inventore enim quo, voluptates repudiandae vero nulla, officia aut?"
            />

            <ProjectCard 
            src={space}
            title="Space Website"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati reprehenderit alias amet quisquam dolore fuga quibusdam libero porro perferendis non inventore enim quo, voluptates repudiandae vero nulla, officia aut?"
            />
        </div>
    </section>
  )
}

export default Projects
