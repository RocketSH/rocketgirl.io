import React from "react"

function About() {
  return (
    <div className="main-content">
      <div class="section-light about-me" id="about-me">
        <div class="container">
          <div class="column is-12 about-me">
            <h1 class="title has-text-centered section-title">About Me</h1>
          </div>
          <div class="columns is-multiline">
            <div
              class="column is-6 has-vertically-aligned-content"
              data-aos="fade-right">
              <p>
                &emsp;&emsp; I have worked at Footwear manufacturing development
                center around 5 years in China and Vietnam. I was inspired after
                joined internal SAP project then decided to learn more
                acknowlege about digital transformation and modernation web
                development.
              </p>
              <br />
              <div class="columns about-links">
                <div class="column">
                  <p class="heading">
                    <strong>using</strong>
                  </p>
                  <p>
                    <a href="https://reactjs.org/">#react</a>
                  </p>
                  <p>
                    <a href="https://developer.mozilla.org/en-us/docs/web/javascript">
                      #javascript
                    </a>
                  </p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>learning</strong>
                  </p>
                  <p>
                    <a href="https://elixir-lang.org/">#elixir</a>
                  </p>
                  <p>
                    <a href="https://www.postgresql.org/">#postgresql</a>
                  </p>
                </div>
              </div>

              <br />
              <div class="is-divider"></div>
              <div class="columns about-links">
                <div class="column">
                  <p class="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p class="subheading">shannon-hu@protonmail.com</p>
                </div>
                <div class="column">
                  <p class="heading">
                    <strong>GitHub</strong>
                  </p>
                  <p class="subheading">https://github.com/RocketSH</p>
                </div>
              </div>
            </div>
            <div class="column is-6 right-image " data-aos="fade-left">
              <img
                class="is-rounded"
                src="https://picsum.photos/id/366/600/375"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
