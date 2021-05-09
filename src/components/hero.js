import React from "react"
import HeroFooter from "./hero-footer"

function Hero() {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="subtitle">Hi there, I am</h1>
          <h1 className="title">Shannon Hu</h1>
          <h1 className="subtitle profession">
            A Frontend Developer& Freediving Lover
          </h1>
          <div />
        </div>
      </div>
      <HeroFooter />
    </section>
  )
}
export default Hero
