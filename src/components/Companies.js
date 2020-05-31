import React from "react"
import PearLogo from "../components/PearLogo"
import SweetspotLogo from "../components/SweetspotLogo"
import TapjoyLogo from "../components/TapjoyLogo"

const Companies = () => {
  return (
    <div
      id="companies"
      className="flex flex-col items-stretch justify-center h-96"
    >
      <div className="mt-32 mb-12 text-center font-bold text-indigo-900 text-xl lg:text-2xl">
        Some awesome companies I've worked with
      </div>
      <div className="flex justify-around">
        <div className="flex self-center">
          <a
            className="w-24 md:w-40"
            href="https://peartherapeutics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PearLogo />
          </a>
        </div>
        <div className="flex self-center">
          <a
            className="w-24 md:w-40"
            href="https://www.tapjoy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TapjoyLogo />
          </a>
        </div>
        <div className="flex self-center">
          <a
            className="w-24 md:w-40"
            href="https://www.youtube.com/watch?v=vsWjMGmsr8E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SweetspotLogo />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Companies
