import { useRef, useEffect, useState, Suspense, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { AnimatePresence, motion } from "motion/react"
import CurveImage, { planeRects } from "./CurveImage"
import { WORK_ITEMS } from "../data"

const scrollTarget = { current: 0 }
const scroll = { current: window.innerHeight * 10 }

function Scene({
  domEls,
  selectedIndex,
  onSelect,
}: {
  domEls: HTMLElement[]
  selectedIndex: number | null
  onSelect: (index: number) => void
}) {
  const frozen = selectedIndex !== null

  useFrame(() => {
    if (!frozen) {
      scroll.current =
        scroll.current + (scrollTarget.current - scroll.current) * 0.05
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
        />
      ))}
    </>
  )
}

export default function CurveSlider() {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [domEls, setDomEls] = useState<HTMLElement[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const openRef = useRef(false)
  const popupRef = useRef<HTMLImageElement | null>(null)

  const selectedItem = selectedIndex !== null ? WORK_ITEMS[selectedIndex] : null

  useEffect(() => {
    openRef.current = selectedIndex !== null
  }, [selectedIndex])

  useEffect(() => {
    const els = Array.from(
      slidesRef.current?.querySelectorAll(".works-slide") ?? []
    ) as HTMLElement[]
    setDomEls(els)
  }, [])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!openRef.current) scrollTarget.current += e.deltaY
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useEffect(() => {
    let lastY = 0
    let tracking = false

    const onTouchStart = (e: TouchEvent) => {
      if (openRef.current) return
      lastY = e.touches[0].clientY
      tracking = true
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!tracking || openRef.current) return
      const y = e.touches[0].clientY
      const delta = lastY - y
      scrollTarget.current += delta
      lastY = y
    }

    const onTouchEnd = () => {
      tracking = false
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
        className="works-canvas"
        dpr={[1, 2]}
        camera={{ fov: 45, near: 0.001, far: 1000, position: [0, 0, 5] }}
        gl={{ antialias: false, alpha: true }}
        // onCreated={({ gl }) => gl.setClearColor(0x000000, 1)}
      >
        {domEls.length > 0 && (
          <Suspense fallback={null}>
            <Scene domEls={domEls} selectedIndex={selectedIndex} onSelect={handleSelect} />
          </Suspense>
        )}
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