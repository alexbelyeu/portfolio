import React, { useState, useEffect } from "react"
import { testimonials } from "../data/testimonials"
import { Card } from "./Card"

const Testimonials = () => {
  const [viewable, setViewable] = useState(0)
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
        Testimonials
      </p>
      <div
        id="Carousel"
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
            }`}
            onClick={e => {
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
