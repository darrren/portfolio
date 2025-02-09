
import React, { useState, useRef, useEffect } from 'react'
import { useHookstate as UseHookstate } from '@hookstate/core'
import globalState from '@/Stores/state'
// import { isMobile, useMobileOrientation } from 'react-device-detect'
import gsap from 'gsap'
// import { subscribe, isSupported } from 'on-screen-keyboard-detector'

export default function Loading() {
  const state = UseHookstate(globalState)
  const { isLoading, isLoaded, loadedCount } = state
  // const orientation = useMobileOrientation()
  const [keyboardShow, setKeyboardShow] = useState(false)

  let completeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  let percent = { value: 0 }
  let loadedKey = useRef([] as string[])

  // useEffect(() => {
  //   if (isSupported()) {
  //     // const unsubscribe = 
  //     subscribe(visibility => {
  //       if (visibility === "visible") {
  //         setKeyboardShow(true)
  //       }
  //       else {
  //         setKeyboardShow(false)
  //       }
  //     });
  //     // After calling unsubscribe() the callback will no longer be invoked.
  //     //  unsubscribe();
  //   }
  // },[])

  // useEffect(() => {
  //   console.log(orientation, keyboardShow)
  // },[orientation])

  useEffect(() => {
    if(isLoading.get()) {
      clearTimeout(completeTimeout.current!)
      gsap.set('html,body', {scrollTop:0})

      const loadItem = isLoaded.get() as Record<string, any>;

      for(let key in loadItem) {
        if(loadItem[key].loaded && !loadItem[key].counted) {
          let count = loadedCount.get()
          let obj = {} as Record<string, any>;
          obj[key] = { ...loadItem[key] }
          obj[key].counted = true

          // check duplicate key
          loadedKey.current.forEach((item) => {
            if(key === item) loadedCount.set(--count)
          })
          loadedKey.current.push(key)

          isLoaded.merge(obj)
          loadedCount.set(++count)
          console.log(`%c${key} loadedCount: ${count} total: ${Object.keys(loadItem).length}`, 'background:#ffff00; color:#999; padding:2px;')
        }
        
        if(loadedCount.get() === Object.keys(loadItem).length) {
          clearTimeout(completeTimeout.current!)
          completeTimeout.current = setTimeout(() => {
            isLoading.set(false)
            isLoaded.set({})
            loadedCount.set(0)
            loadedKey.current = []
            console.log('%cAll loaded.', 'background:#00ff00; color:#fff; padding:2px;')
            window.dispatchEvent(new Event('resize'))
            if(window.lenis) window.lenis.start()
          }, 200)
          // return false
        }
      }
    }
    return () => {
    }
  }, [isLoading, isLoaded])
  
  return (
    <>
      <div className={`${!isLoading.get() ? 'hide' : ''} loading`}>
        <div><span></span></div>
      </div>
      {/* <div className={`${!keyboardShow && orientation.isLandscape ? '' : 'hide'} ${!isMobile ? 'hidden': ''} landscape-cover fixed inset-0 flex justify-center items-center text-white z-50`}>
        <div>
          <p className="text-2xl font-bold mb-6 light-shadow tracking-widest">請把您的手機垂直</p>
          <img className="w-36 mx-auto" src={`${process.env.PUBLIC_URL}/images/rotate.png`} alt=""/>
        </div>
      </div> */}
    </>
  )
}