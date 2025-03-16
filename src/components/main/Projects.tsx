'use client'

import ProjectCard from "../sub/ProjectCard"
import space from '../../../public/SpaceWebsite.png'
import algoJourney1 from '../../../public/AlgooJourneyV1.png'
import algoJourney2 from '../../../public/AlgoJourneyV2.png'
import capstone from '../../../public/capstonePro.png'
import portfolio from '../../../public/portfolio.png'
import restaurant from '../../../public/restaurant.jpeg'
import XOX from '../../../public/tic_tac_toe.png'


const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
        <div className="h-full w-full grid grid-cols-2  gap-10 px-10">

          <ProjectCard 
            src={space}
            title="Space-Themed Portfolio (This)"
            description="I developed a space-themed portfolio website with a sleek, mobile-responsive design and interactive animations. The site features a dynamic starry background and smooth transitions, providing an engaging user experience to showcase my projects and skills in an immersive way."
            />



            <ProjectCard 
            src={algoJourney2}
            title="AlgoJourney V2"
            description="Algo Journey V2 is a team-based platform for competitive programming, featuring AI-powered problem-solving, project rating, and real-time contests with automated profile tracking. It integrates GitHub analysis, WebSockets for live interactions, and Gemini Pro AI chat. I led the frontend development, with Version 1 built entirely by me."
            />

          
            <ProjectCard 
            src={algoJourney1}
            title="AlgoJourney V1"
            description="Algo Journey V1 is a web-based tracker for organizing and tracking LeetCode problems topic-wise, helping users systematically improve their problem-solving skills. It features categorization, progress tracking, and an intuitive UI for efficient learning."
            />

          
            <ProjectCard 
            src={capstone}
            title="Capstone - Portfolio"
            description="A responsive and modern portfolio website built as part of my capstone project at Newton School of Technology. It features a clean UI, smooth navigation, and mobile-friendly design to showcase my projects, achievements, and skills. The site includes project demos, an interactive contact form, and optimized layouts for all devices."
            />



            <ProjectCard 
            src={portfolio}
            title="Portfolio"
            description='Designed a personal portfolio website to showcase my web development skills and projects. Built with HTML, CSS, and JavaScript, the portfolio features a clean, structured layout and a responsive design, ensuring an optimal user experience across devices. Key highlights include an "About Me" section, project showcases, and an interactive contact form.'
            />



            <ProjectCard 
            src={restaurant}
            title="Dine Restaurant"
            description='Developed a desktop-optimized restaurant website with a smooth and user-friendly design. The project includes a dynamic menu, seamless navigation, and an interactive "Book a Table" functionality, ensuring an engaging and hassle-free browsing experience for users.'
            />



            <ProjectCard 
            src={XOX}
            title="Tic Tac Toe Game"
            description='Developed an interactive Tic Tac Toe game that allows two players to compete in a visually engaging web-based environment. The game features a responsive UI, real-time game logic, and dynamic win detection for a seamless and fun user experience.'
            />
        </div>
    </section>
  )
}

export default Projects
