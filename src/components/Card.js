import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const Card = ({ person, role, quote, image, className }) => {
  return (
    <div className={`flex flex-col md:flex-row justify-center items-center min-w-full ${className}`}>
      <div className="flex flex-col items-center">
        {image}
        <p className="pt-2 text-center font-bold text-indigo-900">{person}</p>
        <p className="text-sm text-center text-indigo-800">{role}</p>
      </div>
      <div className="pt-2 px-5 md:pt-0 md:pl-10">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-green-300 absolute text-5xl" />
        <p className="relative pt-4 md:pl-2 text-sm md:text-base text-indigo-900">{quote}</p>
      </div>
    </div>
  )
}
