import React from "react"
import LinkedinSvg from "./svgs/LinkedinSvg"
import MailSvg from "./svgs/MailSvg"

const Footer = () => (
  <div className="flex items-center justify-between text-white bg-indigo-500 h-12 px-8 -mb-2">
    © {new Date().getFullYear()}, Built by me.
    <div className="flex">
      <a
        className="footer-button hover:bg-indigo-300"
        href="https://www.linkedin.com/in/alexanderbelyeu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinSvg />
      </a>
      <a
        className="footer-button hover:bg-indigo-300 ml-4"
        href="mailto:abelyeun@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailSvg />
      </a>
    </div>
  </div>
)

export default Footer
