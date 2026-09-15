import { useRef, useEffect, useState, Suspense, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stats } from "@react-three/drei"
import { EffectComposer, Bloom, DepthOfField, N8AO, Noise as N, TiltShift2, ToneMapping } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import * as THREE from "three"
import { AnimatePresence, motion } from "motion/react"
import CurveImage, { planeRects } from "./CurveImage"
import { WORK_ITEMS } from "../data"

const scrollTarget = { current: 0 }
const scroll = { current: window.innerHeight * 5 }
const scrollVelocity = { current: 0 }
const touchActive = { current: false }

function Scene({
  domEls,
  selectedIndex,
  onSelect,
  totalHeight,
}: {
  domEls: HTMLElement[]
  selectedIndex: number | null
  onSelect: (index: number) => void
  totalHeight: number
}) {
  const frozen = selectedIndex !== null

  useFrame(() => {
    if (!frozen) {
      // Carry momentum after the finger lifts
      if (!touchActive.current) {
        scrollTarget.current += scrollVelocity.current
        scrollVelocity.current *= 0.94
      }
      // Fast drags follow tighter (scroll faster), slow drags glide
      const speed = Math.min(0.12, 0.05 + Math.abs(scrollVelocity.current) * 0.005)
      scroll.current =
        scroll.current + (scrollTarget.current - scroll.current) * speed
    }
  })

  return (
    <>
      {WORK_ITEMS.map((item, i) => (
        <CurveImage
          key={item.image}
          image={item.image}
          domEl={domEls[i]}
          size={item.size}
          scroll={scroll}
          index={i}
          selected={selectedIndex === i}
          onSelect={onSelect}
          totalHeight={totalHeight}
        />
      ))}
    </>
  )
}

export default function CurveSlider() {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [domEls, setDomEls] = useState<HTMLElement[]>([])
  const [totalHeight, setTotalHeight] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const openRef = useRef(false)
  const popupRef = useRef<HTMLImageElement | null>(null)

  const selectedItem = selectedIndex !== null ? WORK_ITEMS[selectedIndex] : null

  useEffect(() => {
    openRef.current = selectedIndex !== null
  }, [selectedIndex])

  useEffect(() => {
    const compute = () => {
      const els = Array.from(
        slidesRef.current?.querySelectorAll(".works-slide") ?? []
      ) as HTMLElement[]
      setDomEls(els)

      if (els.length === 0) return
      const rects = els.map((el) => el.getBoundingClientRect())
      const minTop = Math.min(...rects.map((r) => r.top))
      const maxBottom = Math.max(...rects.map((r) => r.bottom))
      const offset = 50
      setTotalHeight(maxBottom - minTop + offset)
    }
    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!openRef.current) scrollTarget.current += e.deltaY
      scrollVelocity.current = 0
      touchActive.current = false
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useEffect(() => {
    let lastY = 0
    let lastMoveTime = 0
    let tracking = false

    const onTouchStart = (e: TouchEvent) => {
      if (openRef.current) return
      lastY = e.touches[0].clientY
      lastMoveTime = e.timeStamp
      tracking = true
      touchActive.current = true
      scrollVelocity.current = 0
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!tracking || openRef.current) return
      const y = e.touches[0].clientY
      const delta = lastY - y
      scrollTarget.current += delta
      lastY = y
      // Smooth instantaneous velocity, normalized to px per 60fps frame
      const dt = Math.max(1, e.timeStamp - lastMoveTime)
      lastMoveTime = e.timeStamp
      const v = (delta / dt) * (1000 / 60)
      scrollVelocity.current = scrollVelocity.current * 0.6 + v * 0.4
    }

    const onTouchEnd = () => {
      tracking = false
      touchActive.current = false
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index))
  }, [])

  const handleClose = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  useEffect(() => {
    let raf = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      const pop = popupRef.current
      if (pop && selectedIndex !== null) {
        const r = planeRects[selectedIndex]
        if (r) {
          pop.style.width = `${r.w}px`
          pop.style.height = `${r.h}px`
          pop.style.transform = `translate(${r.cx - r.w / 2}px, ${r.cy - r.h / 2}px)`
        }
      }
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [selectedIndex])

  return (
    <>
      <div ref={slidesRef} className="works-slides" aria-hidden="true">
        {WORK_ITEMS.map((item, i) => (
          <div
            key={item.image}
            className={`works-slide ${i % 2 ? "vertical" : "horizontal"}`}
            data-width={item.size.width}
            data-height={item.size.height}
            // style={{ width: item.width }}
          >
            <div className="works-image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      <Canvas
        // shadows
        flat
        linear
        dpr={[0.5, 1]}
        camera={{ fov: 45, near: 0.001, far: 1000, position: [0, 0, 5] }}
        gl={{ antialias: false, alpha: true }}
        // onCreated={({ gl }) => gl.setClearColor(0x000000, 1)}
        className={`works-canvas ${selectedItem ? "!pointer-events-none" : ""}`}
      >
        {process.env.NODE_ENV === "development" && <Stats />}
        {domEls.length > 0 && (
          <Suspense fallback={null}>
            <Scene domEls={domEls} selectedIndex={selectedIndex} onSelect={handleSelect} totalHeight={totalHeight} />
          </Suspense>
        )}
        <EffectComposer multisampling={0}>
          <N opacity={0.06} blendFunction={BlendFunction.MULTIPLY} />
        </EffectComposer>
      </Canvas>

      {selectedItem && (
        <img
          key="works-popup"
          ref={popupRef}
          className="works-popup-img"
          src={selectedItem.image}
          alt={selectedItem.title}
          style={{ zIndex: 65 }}
        />
      )}

      <motion.div
        className="works-overlay"
        initial={false}
        animate={{ opacity: selectedItem ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key={selectedIndex}
            className="works-detail"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
          >
            <p className="works-detail-kicker">{selectedItem.category}</p>
            <h2 className="works-detail-title">{selectedItem.title}</h2>
            <p className="works-detail-desc">{selectedItem.description}</p>
            <div className="works-detail-skills">
              {selectedItem.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedItem && (
          <motion.button
            key="close"
            type="button"
            className="works-close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            aria-label="Close"
          >
            Close
            <span className="works-close-x" aria-hidden="true">&#10005;</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}