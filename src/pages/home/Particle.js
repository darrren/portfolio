class Particle {
  constructor (canvas, ctx, ctx2, color) {
    this.pos = {
      x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
      y: Math.random() * canvas.height * 0.8 + canvas.height * 0.1
    }
    this.r = 1
    this.speed = 0.1
    this.step = Math.random() * 400
    this.vx = Math.random() * this.speed / 4 - this.speed / 8
    this.vy = Math.random() * this.speed / 4 - this.speed / 8
    // this.colIndex = Math.floor(Math.random() * cols.length)
    this.alpha = Math.random() * 1
    this.alphaStep = Math.random() * 0.02
    this.alphaType = 'fadein'
    this.history = []
    this.historyMaxLen = 5
    this.windowOffset = 50
    this.update = () => {
      /// ///////////////////////////////////
      this.step++
      this.step %= 400
      if (this.history.length > this.historyMaxLen) {
        this.history.shift()
      }
      this.pos.x += this.vx
      this.pos.y += this.vy
      this.vx = this.vx * 0.98 + (Math.random() * this.speed * 2 - this.speed)
      this.vy = this.vy * 0.98 + (Math.random() * this.speed * 2 - this.speed)

      // var dx = mouse.x - this.pos.x
      // var dy = mouse.y - this.pos.y
      // if(this.step > 365) {
      // mouse
      // this.vx = this.vx * 0.9 + dx * 0.004
      // this.vy = this.vy * 0.9 + dy * 0.004
      // this.vx = Math.min(this.vx,  4.0)
      // this.vx = Math.max(this.vx, -4.0)
      // this.vy = Math.min(this.vy,  4.0)
      // this.vy = Math.max(this.vy, -4.0)
      // center
      // this.vx = this.vx * 0.9 + (canvas.width/2 - this.pos.x ) * 0.002
      // this.vy = this.vy * 0.9 + (canvas.height/2 - this.pos.y ) * 0.002
      // }

      // if(this.step > 100 && this.step < 110) {
      // mouse
      // var d = dx * dx + dy * dy
      // if (d < (canvas.height/8 * canvas.height/8)){
      //   this.vx = this.vx * 0.9 - (mouse.x - this.pos.x ) * 0.002
      //   this.vy = this.vy * 0.9 - (mouse.y - this.pos.y ) * 0.002
      // }
      // center
      // this.vx = this.vx * 0.9 + (canvas.width/2 - this.pos.x ) * 0.002
      // this.vy = this.vy * 0.9 + (canvas.height/2 - this.pos.y ) * 0.002
      // }

      if (this.alpha >= 1) {
        this.alphaType = 'fadeout'
      } else if (this.alpha <= 0) {
        this.alphaType = 'fadein'
      }

      if (this.alphaType === 'fadeout') {
        this.alpha = Math.max(this.alpha -= this.alphaStep, 0)
      } else if (this.alphaType === 'fadein') {
        this.alpha = Math.min(this.alpha += this.alphaStep, 1)
      }
      /// ///////////////////////////////////
      if (this.history.length > this.historyMaxLen - 1) {
        ctx.beginPath()
        ctx.moveTo(this.pos.x, this.pos.y)
        for (var i = this.history.length - 1; i >= 0; i--) {
          ctx.lineTo(this.history[i].x, this.history[i].y)
        }
        // ctx.fillStyle = `hsla(${Math.sin( this.step / 300) * 70 + 70},${99}%,${50}%,1)`
        // ctx.strokeStyle = `hsla(${Math.sin( this.step / 300) * 70 + 70},${99}%,${50}%,0.5)`
        // ctx.fillStyle = cols[this.colIndex]
        // ctx.strokeStyle = cols[this.colIndex]
        ctx.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + this.alpha + ')'
        ctx.strokeStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + this.alpha + ')'
        ctx.fill()
        ctx.lineWidth = 2
        ctx.lineJoin = 'round'
        // ctx.closePath()
        ctx.stroke()

        // orb
        ctx2.beginPath()
        // ctx2.fillStyle = `rgba(250,250,250,0.05)`
        // ctx2.fillStyle = cols[this.colIndex]
        ctx2.fillStyle = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + this.alpha + ')'

        ctx2.arc(this.history[this.historyMaxLen - 1].x, this.history[this.historyMaxLen - 1].y, 8 * this.alpha, 0, 2 * Math.PI)
        ctx2.shadowColor = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + this.alpha + ')'
        ctx2.shadowBlur = 10
        ctx2.shadowOffsetX = 0
        ctx2.shadowOffsetY = 0
        ctx2.fill()
      }

      /// ///////////////////////////////////
      if (this.pos.x > canvas.width + this.windowOffset || this.pos.x < -this.windowOffset || this.pos.y > canvas.height + this.windowOffset || this.pos.y < -this.windowOffset) {
        delete this.pos
        delete this.history
        this.alpha = 0
        this.alphaType = 'fadein'
        return false
      }
      this.history.push({
        x: this.pos.x,
        y: this.pos.y
      })
      return true
    }
  }
}

export default Particle
