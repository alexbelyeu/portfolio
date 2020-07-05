import React from "react"
import LinkedinSvg from "./svgs/LinkedinSvg"
import MailSvg from "./svgs/MailSvg"

const sendToContactPage = () => {
  window.location = '/contact';
}

let toolTipTimeout
const copyEmailToClipboard = () => {
  const emailTooltip = document.querySelector("#email-tooltip")
  navigator.clipboard
    ? navigator.clipboard.writeText("abelyeun@gmail.com").then(
        function () {
          clearTimeout(toolTipTimeout)
          emailTooltip.textContent = "I copied my email to your clipboard!"
          emailTooltip.style.top = "-80px"
          emailTooltip.style.width = "10rem"
          emailTooltip.classList.add("opacity-100")
          toolTipTimeout = setTimeout(() => {
            emailTooltip.classList.remove("opacity-100")
          }, 4000)
        },
        function () {
          sendToContactPage()
          console.log("err")
        }
      ).catch(sendToContactPage)
    : sendToContactPage()
}

const showHint = () => {
  const emailTooltip = document.querySelector("#email-tooltip")
  clearTimeout(toolTipTimeout)
  emailTooltip.textContent = "Contact me!"
  emailTooltip.style.top = "-50px"
  emailTooltip.style.width = "8rem"
  emailTooltip.classList.add("opacity-100")
  toolTipTimeout = setTimeout(() => {
    emailTooltip.classList.remove("opacity-100")
  }, 2000)
}

const Footer = () => (
  <div className="flex items-center justify-between text-white bg-indigo-500 h-12 px-8 -mb-2">
    © {new Date().getFullYear()}, Built by me.
    <div className="flex">
      <a
        className="footer-button"
        href="https://www.linkedin.com/in/alexanderbelyeu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinSvg />
      </a>
      <button
        className="footer-button ml-4"
        onClick={copyEmailToClipboard}
        onMouseEnter={showHint}
      >
        <div
          id="email-tooltip"
          className="tooltip transition-el text-indigo-900 opacity-0 right-0"
          style={{ top: "-80px" }}
        />
        <MailSvg />
      </button>
    </div>
  </div>
)

export default Footer
