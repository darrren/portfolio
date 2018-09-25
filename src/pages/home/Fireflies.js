import React from 'react'
import Particle from './Particle'
import { Canvas } from './style.js'

class Fireflies extends React.Component {
  constructor (props) {
    super(props)

    this.init = this.init.bind(this)
    this.animate = this.animate.bind(this)
    this.setup = this.setup.bind(this)
    this.fade = this.fade.bind(this)
    this.draw = this.draw.bind(this)
    this.hexToRgb = this.hexToRgb.bind(this)

    this.numParticles = 20
    this.bg = [26, 29, 36]
    // this.cols = ['#FF9800']
    // this.cols = ['#5fe4e2']
    this.cols = this.hexToRgb('#5fe4e2')
  }

  init () {
    window.requestAnimFrame = (function (callback) {
      return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60)
          }
    })()

    this.canvas = document.getElementById('canvas')
    this.canvas2 = document.getElementById('canvas2')
    // this.canvas = document.createElement('canvas');
    // this.canvas2 = document.createElement('canvas')
    // document.getElementsByTagName('body')[0].appendChild(this.canvas)
    // document.getElementsByTagName('body')[0].appendChild(this.canvas2)
    this.ctx = this.canvas.getContext('2d')
    this.ctx2 = this.canvas2.getContext('2d')

    this.setup()
    window.addEventListener('resize', this.setup)

    this.particles = [new Particle(this.canvas, this.ctx, this.ctx2, this.cols)]

    this.animate()
    // setInterval(animate, 1000/29.9)
  }

  animate () {
    this.fade(0.6)
    this.draw()
    window.requestAnimFrame(this.animate)
  }

  setup () {
    this.canvas.width = this.canvas2.width = window.innerWidth
    this.canvas.height = this.canvas2.height = window.innerHeight
    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = `rgba(${this.bg[0]}, ${this.bg[1]}, ${this.bg[2]}, ${1})`
    this.ctx.fill()
  }

  fade (amt) {
    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = `rgba(${this.bg[0]}, ${this.bg[1]}, ${this.bg[2]}, ${amt})`
    this.ctx.fill()
  }

  draw () {
    if (this.particles.length < this.numParticles) {
      this.particles.push(new Particle(this.canvas, this.ctx, this.ctx2, this.cols))
    }

    this.ctx2.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // ctx2.shadowBlur = 1;
    // ctx2.shadowColor = '#000';
    this.ctx2.globalAlpha = 0.1

    this.particles = this.particles.filter(function (p) {
      return p.update()
    })
  }

  hexToRgb (hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b
    })

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  componentDidMount () {
    this.init()
  }

  render () {
    return (
      <div>
        <Canvas id='canvas' />
        <Canvas id='canvas2' />
      </div>
    )
  }
}

export default Fireflies
