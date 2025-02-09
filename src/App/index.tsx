import { useState, useLayoutEffect, useEffect, lazy, Suspense } from "react"
import { Routes, Route, useLocation, useParams, useNavigate, Navigate } from "react-router-dom"
import { AnimatePresence, LazyMotion, domAnimation, MotionConfig } from "motion/react"
import { useHookstate as UseHookstate } from '@hookstate/core'
import globalState from '@/Stores/state'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Home = lazy(() => import('@/Pages/Home'))

export default function App() {
  const state = UseHookstate(globalState)
  const { isTest, baseUrl, env, isInit, isLoading, isLoaded, loadedCount } = state
  const location = useLocation()
  const [pathname, setPathname] = useState('')

  useLayoutEffect(() => {
    setPathname(location.pathname)
  })

  useEffect(() => {
    console.log(location.pathname, pathname)
    if(location.pathname !== pathname) {
      console.log('show loading........')
      // document.body.style.height = 'auto'
      isInit.set(false)
      isLoading.set(true)
      isLoaded.set({})
      loadedCount.set(0)
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      // This in case a scroll animation is active while the route is updated
      gsap.killTweensOf(window);
    }
  }, [location, pathname])

  useEffect(() => {
    if(!isInit.get() && !isLoading.get()) {
      console.log('init')
      isInit.set(true)
    }
  }, [isInit, isLoading])

  useEffect(() => {
    console.log(baseUrl.get())
    console.log(env.get())
    const urlParams = new URLSearchParams(location.search)
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<></>}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={`/`} element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
      </Suspense>
    </div>
  );
}