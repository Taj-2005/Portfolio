'use client'

import courseData from "../../../constants/data/music_courses.json";
import { CardBody, CardContainer, CardItem } from "../sub/3dCard";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '../../../utils/motion.ts'
import {BackgroundBeams} from "../sub/BackgroundBeams";


const Projects = () => {
  return (
    <section id='projects' className="min-h-screen py-12 pt-36 z-20">
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-6xl font-bold text-white mt-[10px] text-center mb-[15px] '
        >
            My Projects
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='josefin-sans text-[20px] text-gray-300 mb-10 mt-[10px] text-center'
        >
            Showcasing creativity, problem-solving, and innovation through code.
        </motion.div>
      <div>
        <BackgroundBeams />
      </div>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (
          <CardContainer className="inter-var m-4" key={course.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0c0224] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
              {course.github && (
                <a href={course.github} target="_blank">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex"
                  >
                    <FaGithub className="mr-2" />
                    Github Repo →
                  </CardItem>
                </a>
              )}
                <a href={course.livelink}  target="_blank">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Link
                  </CardItem>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  )
}

export default Projects
