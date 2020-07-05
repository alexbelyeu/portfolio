import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const ExternalLinkIcon = () => (
  <div className="w-6 flex justify-center items-center">
    <FontAwesomeIcon
      icon={faExternalLinkAlt}
      className="text-indigo-900 absolute text-xs"
    />
  </div>
)

export default ExternalLinkIcon
