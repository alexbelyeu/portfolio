import React from "react"

const ProjectGif = ({ isActive, className, projectDesc }) => {
  const projectGifGifHovered = isActive && "hover"
  const projectGifTitleHovered = isActive && "hidden"
  return (
    <div
      id="project-gif-container"
      className="group flex justify-center items-center cursor-pointer border border-2 border-teal-500 rounded"
    >
      <div
        id="project-gif-gif"
        className={`project-gif-swap h-10 md:h-24 ${className} ${projectGifGifHovered}`}
      />
      <div
        id="project-gif-title"
        className="group-hover:hidden w-full md:w-4/5 absolute text-teal-500 text-center"
      >
        {projectDesc}
      </div>
    </div>
  )
}

export default ProjectGif
