import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { useHookstate } from '@hookstate/core'
import globalState from '@/Stores/state'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'motion/react'

// COMPONENTS
import { preloadImgTag } from '@/Components/preloadImgTag'

interface Props {
  children: React.ReactNode
}

const animation = {
  pageTransition: {
    name: "Page Transition",
    variants: {
      initial: {
        opacity: 0,
        top:10
      },
      animate: {
        opacity: 1,
        top:0
      },
      exit: {
        opacity: 0,
        top:-10
      }
    },
    transition: {
      duration: 0.7
    }
  }
}

export default function Layout({ children }: Props) {
  const location = useLocation()
  const state = useHookstate(globalState)
  const { isInit, lenisScroll, scrollY } = state
  const [isInited, setIsInited] = useState(false)

  // mount & unmount
  useEffect(() => {
    const p = preloadImgTag()
    return () => {
      p.cancel()
    }
  }, [])

  useEffect(() => {
    // console.log(isInited, isInit)
    if(!isInited && isInit) {
      setIsInited(true)
      // console.log(!(location.pathname.indexOf('/ticket') !== -1))
      // if(!(location.pathname.indexOf('/ticket') !== -1)) {
        const lenis = new Lenis({
          lerp: 0.2,
          // duration: 1.6,
          smoothWheel: true,
          // smoothTouch: true,
          syncTouchLerp: 0.05,
          syncTouch: true,
          wheelMultiplier: 2,
          touchMultiplier: 1
        })

        lenis.on('scroll', (e) => {
          scrollY.set(e.scroll)
        })
        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)

        lenis.stop()
        window.lenis = lenis
        lenisScroll.set(lenis)
      // }

      // FadeIn Items
      // const fadeInItems = document.querySelectorAll('.fadeIn')
      // for(const item of fadeInItems) {
      //   window.lenis.on('scroll', (e) => {
      //     checkInview(item)
      //   })
      //   checkInview(item)
      // }
      // setTimeout(() => {
      //   const targets = document.querySelectorAll('.fadeIn')
      //   // console.log(targets)
      //   const observer = new IntersectionObserver((entries, observer) => {
      //     // console.log(entries)
      //     entries.forEach((entry) => {
      //       if(entry.isIntersecting) {
      //         console.log('in')
      //         entry.target.classList.add('is-inview')
      //         observer.unobserve(entry.target)
      //       } else {
      //         console.log('out')
      //         entry.target.classList.remove('is-inview')
      //       }
      //   });
      //   }, {
      //     root: null,
      //     threshold: 0
      //   })
      //   targets.forEach(target => observer.observe(target))
      // }, 500)
    }
    return () => {
      if(lenisScroll.get()) lenisScroll.get()?.destroy()
    }
  }, [])

  return (
    <>
      <motion.div
        key={`page_${location.pathname}`}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animation.pageTransition.variants}
        transition={animation.pageTransition.transition}
        className="relative"
        // style={{willChange:'transform, opacity'}}
      >
        <div
          id="scrollArea"
          className="scrollArea"
        >
          <main id="main" className="relative overflow-hidden">
            { children }
          </main>
        </div>
      </motion.div>
    </>
  )
}