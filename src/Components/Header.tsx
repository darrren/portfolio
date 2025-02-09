import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useHookstate as UseHookstate } from '@hookstate/core'
import globalState from '@/Stores/state'
import gsap from 'gsap'
import { motion } from 'motion/react'

export default function Header() {
  const location = useLocation()
  const state = UseHookstate(globalState)

  return (
    <>
      <header id="header">
      </header>
    </>
  )
}