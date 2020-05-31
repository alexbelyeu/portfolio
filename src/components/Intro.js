import React from "react"

const Intro = () => {
  return (
    <div
      id="intro"
      className="flex flex-col items-center justify-center mt-16 mb-48 mx-10 sm:mx-20 md:mx-32"
    >
      <p className="text-lg">
        <span className="font-bold text-indigo-900">Welcome! </span>I'm Alex Belyeu, a
        Software Engineer based in Cambridge (MA), and raised in Madrid, Spain
        🇪🇸. Over the last 4 years, here are some of my proudest accomplishments:
      </p>
      <ul className="pt-3 text-lg">
        <li>
          🍺 I <span className="font-bold text-indigo-900">co-founded a startup</span> that
          found the best real-time deals from bars around you.
        </li>
        <li>
          🎮 I developed the frontend of an ad framework that was{" "}
          <span className="font-bold text-indigo-900">used by millions</span> of gamers monthly.
        </li>
        <li>
          🏅 I was the <span className="font-bold text-indigo-900">first engineering hire</span>{" "}
          of the Pear Boston office.
        </li>
      </ul>
      <p className="pt-1 text-lg">
        At Pear{" "}
        <span role="img" aria-label="pear">
          🍐
        </span>
        , I am currently the{" "}
        <span className="font-bold text-indigo-900">Tech Lead for Somryst</span> — the
        first digital therapeutic for Insomnia approved by the FDA for
        commercialization.
      </p>
    </div>
  )
}

export default Intro
