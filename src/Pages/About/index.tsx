import { memo, useState, ReactNode, useEffect } from "react"
import Layout from "@/Components/Layout"
import { motion } from 'motion/react'
import { useHookstate } from '@hookstate/core'
import globalState from '@/Stores/state'

import "./styles.scss"

// COMPONENTS
import Badge from "./Badge"

interface Role {
  title: string
  company: string
  period: string
  highlights: string[]
}

const experience: Role[] = [
  {
    title: "Associate Director of Development",
    company: "Pontac Ltd.",
    period: "2020 – 2026",
    highlights: [
      "Built interactive 3D web features with Three.js and React Three Fiber, turning product displays into quality scenes while keeping them running smoothly.",
      "Spearheaded the architecture and development of high-profile websites using React.js, Next.js and TypeScript.",
      "Guided the overall web team strategy and coached junior developers to write better code, solve problems effectively and keep learning.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Zlashy Ltd.",
    period: "2019 – 2020",
    highlights: [
      "Collaborated with the China team on the client side in an agile Scrum environment.",
      "Made sure websites worked perfectly across all browsers and device types.",
      "Identified problems uncovered by customer feedback and testing, correcting them or routing them to the right people.",
    ],
  },
  {
    title: "Front End Development Senior Analyst",
    company: "Accenture Interactive",
    period: "2016 – 2019",
    highlights: [
      "Built a website application directly at the client's office, working closely with the team in an agile Scrum environment.",
      "Developed websites using the React.js framework.",
    ],
  },
  {
    title: "Junior / Front-end Web Developer",
    company: "Pixo Punch Ltd.",
    period: "2011 – 2016",
    highlights: [
      "Developed website applications with jQuery and JavaScript.",
      "Created accessible, responsive and functional interfaces so end users on any device or browser had the same perfect experience.",
      "Built websites that followed web accessibility standards.",
      "Continuously learned new techniques on my own to keep improving.",
    ],
  },
]

const skills: { label: string; items: string }[] = [
  { label: "Core Technologies", items: "React.js, Next.js, TypeScript, Vue.js, JavaScript (ES6+), HTML5, CSS3" },
  { label: "3D & Animation", items: "Three.js, React Three Fiber, GSAP, Blender" },
  { label: "Styling & UI", items: "Tailwind CSS, SCSS, Responsive Design, Web Accessibility (WCAG)" },
  { label: "AI-Assisted Development", items: "Opencode, Gemini" },
  { label: "Architecture & Tools", items: "RESTful APIs, Axios/Fetch API, i18n, Git, Agile/Scrum" },
]

const education: { school: string; detail: string; period: string }[] = [
  { school: "IVE (TM)", detail: "Higher Diploma in Mobile & Internet Games Development (Year 1-4)", period: "2005 – 2010" },
  { school: "YPI & CA Lee Lim Ming College", detail: "Secondary School (Form 1 – 5)", period: "2000 – 2005" },
]

function Section({
  kicker,
  children,
}: {
  kicker: string
  children: ReactNode
}) {
  return (
    <section className="about-section">
      <p className="about-kicker">{kicker}</p>
      {children}
    </section>
  )
}

const About = memo(function About() {
  const { isInit, scrollY } = useHookstate(globalState)
  const [isReady, setIsReady] = useState(false)
  const [flipKey, setFlipKey] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 1200)
  }, [isInit])

  return (
    <Layout>
      <div className="canvas">
        {isReady && <Badge flipKey={flipKey} />}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY.get() > 200 ? 0 : 1 }}
      >
        <button
          onClick={() => setFlipKey((k) => k + 1)}
          className="fixed bottom-6 md:bottom-10 right-6 z-30 px-4 py-2 text-[10px] md:text-xs tracking-widest text-white border border-white/40 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/15 transition pointer-events-auto">
          Flip Badge
        </button>
      </motion.div>
      <div
        className="container relative z-10 flex justify-center items-start min-h-[100svh] pointer-events-none"
        style={{ textShadow: "0 0 10px #000, 0 0 20px #000" }}>
        <section className="about page">
          <div className="about-inner">
            <div className="about-heading">
              <p className="about-kicker">About</p>
              <h1 className="about-name">Darren Chan</h1>
            </div>

            <div className="about-body">
              <p className="about-lede">
                A Front-end developer with 16+ years building websites that are
                as beautiful as they are reliable.
              </p>
              <p className="about-copy">
                I'm a fast learner with an open mind and a strong passion for
                building websites. I always deliver high-quality work and excel
                at using my knowledge to solve project problems — feedback from
                teammates and colleagues has been consistently great. Based in
                Hong Kong, working with studios and brands around the world.
              </p>
            </div>

            <Section kicker="Experience">
              <div className="about-timeline">
                {experience.map((role) => (
                  <div className="about-role" key={`${role.company}-${role.period}`}>
                    <div className="about-role-head">
                      <h2 className="about-role-title">{role.title}</h2>
                      <p className="about-role-period">{role.period}</p>
                    </div>
                    <p className="about-role-company">{role.company}</p>
                    <ul className="about-role-list">
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section kicker="Skills">
              <div className="about-skills">
                {skills.map((group) => (
                  <div className="about-skills-item" key={group.label}>
                    <p className="about-skills-label">{group.label}</p>
                    <p className="about-skills-value">{group.items}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section kicker="Education">
              <div className="about-edu">
                {education.map((item) => (
                  <div className="about-edu-item" key={item.school}>
                    <div className="about-edu-head">
                      <p className="about-edu-school">{item.school}</p>
                      <p className="about-edu-period">{item.period}</p>
                    </div>
                    <p className="about-edu-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <div className="about-meta">
              <dl>
                <div>
                  <dt>Contact</dt>
                  <dd><a className="underline" href="mailto:darrenchan104@gmail.com">darrenchan104@gmail.com</a></dd>
                </div>
                <div>
                  <dt>LinkedIn</dt>
                  <dd><a className="underline" href="https://www.linkedin.com/in/darrrenchan/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/darrrenchan/</a></dd>
                </div>
                <div>
                  <dt>Github</dt>
                  <dd><a className="underline" href="https://github.com/darrren" target="_blank" rel="noopener noreferrer">https://github.com/darrren</a></dd>
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