import React, { useState, useEffect } from "react"
import { testimonials } from "../data/testimonials"
import { Card } from "./Card"

const Testimonials = () => {
  let x0
  const [viewable, setViewable] = useState(0)

  const swipe = (start, end) => {
    // Considering 75 px enough to be a swipe
    if (Math.abs(start - end) > 75) {
      // Swipe right, to go left
      if (Math.sign(start - end) === -1) {
        if (viewable === 0) return // Leftmost so do nothing
        setViewable(viewable - 1)
      } else {
        // Swipe left, to go right
        if (viewable === testimonials.length - 1) return // Rightmost so do nothing
        setViewable(viewable + 1)
      }
    }
  }

  useEffect(() => {
    let root = document.documentElement
    root.style.setProperty("--viewable", viewable)
  }, [viewable])

  return (
    <div
      id="testimonials"
      className="bg-indigo-200 flex flex-col items-center justify-center"
    >
      <p className="my-5 text-center font-bold text-indigo-900 text-xl lg:text-2xl">
        And people I've worked with have some nice things to say!
      </p>
      <div
        id="Carousel"
        onTouchStart={e => (x0 = e.changedTouches[0].clientX)}
        onTouchEnd={e => swipe(x0, e.changedTouches[0].clientX)}
        onMouseDown={e => (x0 = e.clientX)}
        onMouseUp={e => swipe(x0, e.clientX)}
        className="flex max-w-xs md:max-w-lg overflow-hidden"
      >
        {testimonials.map(testimonial => (
          <Card
            className="slide transition-el"
            key={`${testimonial.person}Card`}
            id={`${testimonial.person}Card`}
            person={testimonial.person}
            role={testimonial.role}
            quote={testimonial.quote}
            image={testimonial.image}
          />
        ))}
      </div>
      <div id="Dots" className="flex flex-row my-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.person}Dot`}
            id={`${testimonial.person}Dot`}
            className={`dot transition-el ${
              index === viewable && "font-bold text-indigo-900 fancy-underline"
            } ${index !== viewable && "cursor-pointer"}`}
            onClick={() => {
              setViewable(index)
            }}
          >
            {testimonial.person.split(" ")[0]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
