import { useRef, useEffect, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import CurveImage from "./CurveImage"
import { WORK_ITEMS } from "../data"

const scrollTarget = { current: 0 }
const scroll = { current: window.innerHeight * 10 }

function Lerp() {
  useFrame(() => {
    scroll.current =
      scroll.current + (scrollTarget.current - scroll.current) * 0.05
  })
  return null
}

function Scene({ domEls }: { domEls: HTMLElement[] }) {
  return (
    <>
      <Lerp />
      {WORK_ITEMS.map((item, i) => (
        <CurveImage
          key={item.image}
          image={item.image}
          domEl={domEls[i]}
          size={item.size}
          scroll={scroll}
        />
      ))}
    </>
  )
}

export default function CurveSlider() {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [domEls, setDomEls] = useState<HTMLElement[]>([])

  useEffect(() => {
    const els = Array.from(
      slidesRef.current?.querySelectorAll(".works-slide") ?? []
    ) as HTMLElement[]
    setDomEls(els)
  }, [])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      scrollTarget.current += e.deltaY
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  return (
    <>
      <div ref={slidesRef} className="works-slides" aria-hidden="true">
        {WORK_ITEMS.map((item, i) => (
          <div
            key={item.image}
            className={`works-slide ${i % 2 ? "vertical" : "horizontal"}`}
            data-width={item.size.width}
            data-height={item.size.height}
            style={{ width: item.width }}
          >
            <div className="works-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      <Canvas
        className="works-canvas"
        dpr={[1, 2]}
        camera={{ fov: 45, near: 0.001, far: 1000, position: [0, 0, 5] }}
        gl={{ antialias: false }}
        onCreated={({ gl }) => gl.setClearColor(0xeeeeee, 1)}
      >
        {domEls.length > 0 && (
          <Suspense fallback={null}>
            <Scene domEls={domEls} />
          </Suspense>
        )}
      </Canvas>
    </>
  )
}
