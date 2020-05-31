import React, { useState, useEffect } from "react"
import { testimonials } from "../data/testimonials"
import { Card } from "./Card"

const Testimonials = () => {
  let x0
  const [viewable, setViewable] = useState(0)
  useEffect(() => {
    let root = document.documentElement
    root.style.setProperty("--viewable", viewable)
  }, [viewable])

  const swipe = (start, end) => {
    if (Math.abs(start - end) > 100) {
      // Swipe right to go left
      if (Math.sign(start - end) === -1) {
        if (viewable === 0) return // Leftmost so nothing
        setViewable(viewable - 1)
      } else {
        // Swipe left to go right
        if (viewable === testimonials.length - 1) return // Rightmost so nothing
        setViewable(viewable + 1)
      }
    }
  }

  return (
    <div
      id="testimonials"
      className="bg-indigo-200 flex flex-col items-center justify-center"
    >
      <p className="my-5 text-center font-bold text-indigo-900 text-xl lg:text-2xl">
        Testimonials
      </p>
      <div
        id="Carousel"
        onTouchStart={e => (x0 = e.changedTouches[0].clientX)}
        onTouchEnd={e => swipe(x0, e.changedTouches[0].clientX)}
        onMouseDown={e => (x0 = e.clientX)}
        onMouseUp={e => swipe(x0, e.clientX)}
        className="flex max-w-xs md:max-w-lg overflow-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <Card
            className="slide"
            key={`${testimonial.person}Card`}
            id={`${testimonial.person}Card`}
            person={testimonial.person}
            role={testimonial.role}
            quote={testimonial.quote}
            image={testimonial.image}
          />
        ))}
      </div>
      <div id="Dots" className="flex flex-row mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.person}Dot`}
            id={`${testimonial.person}Dot`}
            className={`${index !== 0 && "ml-2"} ${
              index === viewable && "font-bold text-indigo-900"
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
