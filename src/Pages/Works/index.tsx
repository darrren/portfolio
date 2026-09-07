import { memo } from "react"
import Layout from "@/Components/Layout"
import CurveSlider from "./Components/CurveSlider"
import "./styles.scss"

const Works = memo(function Works() {
  return (
    <Layout>
      <section className="works page">
        <CurveSlider />
        <div className="works-heading pointer-events-none">
          <p className="works-kicker">Portfolio</p>
          <h1 className="works-title">Selected Works</h1>
        </div>
      </section>
    </Layout>
  )
})

export default Works