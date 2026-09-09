import { memo } from "react"
import Layout from "@/Components/Layout"
import CurveSlider from "./Components/CurveSlider"
import "./styles.scss"

const Works = memo(function Works() {
  return (
    <Layout>
      <section className="works page">
        <div className="works-heading pointer-events-none">
          <p className="works-kicker tracking-[1rem]">Portfolio</p>
          <h1 className="works-title tracking-widest">Selected Works</h1>
        </div>
        <CurveSlider />
      </section>
    </Layout>
  )
})

export default Works