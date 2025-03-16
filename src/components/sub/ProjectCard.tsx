

interface Props {
    src : string
    title : string
    description : string
}

const ProjectCard = ({src, title, description} : Props ) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full">
        <img 
        src = {src}
        alt = {title}
        width = {1000}
        height = {1000}
        className="w-full object-contain"
        />

        <div className="relative p-4 ">
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description }</p>
        </div>
    </div>
  )
}

export default ProjectCard
