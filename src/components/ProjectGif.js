import React from "react"

const ProjectGif = ({ project, className }) => (
  <div className="group flex justify-center items-center hover:scale-125 cursor-pointer">
    <div className="group-hover:hidden absolute z-10 text-teal-500 text-center italic font-bold">
      {project}
    </div>
    <div
      className={`gif-swap w-full border border-8 border-gray-600 rounded ${className}`}
    />
  </div>
)

export default ProjectGif
