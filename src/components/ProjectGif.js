import React from "react"

const ProjectGif = ({ isActive, projectClassName, projectDesc }) => {
  const projectGifActive = isActive && "active"
  return (
    <div
      id="projectGifContainer"
      className="h-10 md:h-24 lg:h-32 w-full flex justify-center items-center cursor-pointer"
    >
      <div
        id="projectGifGif"
        className={`h-10 md:h-24 lg:h-32 project-gif-gif ${projectClassName} ${projectGifActive}`}
      />
      <div
        id="projectGifTitle"
        className={`relative text-teal-500 text-center project-gif-title ${projectGifActive}`}
      >
        {projectDesc}
      </div>
    </div>
  )
}

export default ProjectGif
