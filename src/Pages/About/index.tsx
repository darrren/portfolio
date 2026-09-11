import { memo } from "react"
import Layout from "@/Components/Layout"
import Badge from "./Badge"
import "./styles.scss"

const About = memo(function About() {
  return (
    <Layout>
      <div className="canvas">
        <Badge />
      </div>
      <div className="relative z-10 flex justify-center items-center min-h-[100svh] pointer-events-none" style={{textShadow: '0 0 10px #000, 0 0 20px #000'}}>
        <section className="about page">
          <div className="about-inner">
            <div className="about-heading">
              <p className="about-kicker">About</p>
              <h1 className="about-name">Darren Chan</h1>
            </div>
            <div className="about-body">
              <p className="about-lede">
                A designer &amp; creative developer exploring the space between
                interface, motion and code.
              </p>
              <p className="about-copy">
                I build immersive web experiences with a focus on typography,
                color and the details that make digital products feel human.
                Based in Hong Kong, working with studios and brands around the
                world.
              </p>
            </div>
            <div className="about-meta">
              <dl>
                <div>
                  <dt>Focus</dt>
                  <dd>Creative Development</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>React, Three.js, GLSL</dd>
                </div>
                <div>
                  <dt>Contact</dt>
                  <dd>hello@darrenchan.com</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
})

export default About