import React from "react"

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center text-lg text-indigo-900 mt-16 mb-48 mx-10 sm:mx-20 md:mx-32">
      <p>
        <span className="font-bold">Welcome! </span>I'm Alex Belyeu, a Software
        Engineer based in Cambridge (MA), and raised in Madrid, Spain 🇪🇸. Over
        the last 4 years, here are some of my proudest accomplishments:
      </p>
      <ul className="p-3">
        <li>
          <span role="img" aria-label="beer emoji">
            🍺
          </span>{" "}
          I <span className="font-bold">co-founded a startup</span> that found
          the best real-time deals from bars around you.
        </li>
        <li>
          <span role="img" aria-label="game emoji">
            🎮
          </span>{" "}
          I developed the frontend of an ad framework that was{" "}
          <span className="font-bold">used by millions</span> of gamers monthly.
        </li>
        <li>
          <span role="img" aria-label="medal emoji">
            🏅
          </span>{" "}
          I was the <span className="font-bold">first engineering hire</span> of
          the Pear Boston office.
        </li>
      </ul>
      <p>
        At Pear{" "}
        <span role="img" aria-label="pear">
          🍐
        </span>
        , I am currently the{" "}
        <span className="font-bold">Tech Lead for Somryst</span> — the first
        digital therapeutic for Insomnia approved by the FDA for
        commercialization.
      </p>
    </div>
  )
}

export default Intro
