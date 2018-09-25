import React from 'react'
import { Router } from '../../routes'
import NProgress from 'nprogress'
import { TweenMax } from 'gsap'
import styled from 'styled-components'

class Loading extends React.Component {
  constructor (props) {
    super(props)

    NProgress.configure({ showSpinner: false })

    Router.onRouteChangeStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
      TweenMax.to(this.l._reactInternalFiber.child.stateNode, 0.3, { autoAlpha:1 })
    }
    Router.onRouteChangeComplete = () => {
      NProgress.done()
      TweenMax.to(this.l._reactInternalFiber.child.stateNode, 0.3, { autoAlpha:0 })
    }
    Router.onRouteChangeError = () => {
      NProgress.done()
    }
  }

  componentDidMount () {
    // console.log(this.l._reactInternalFiber.child.stateNode);
    TweenMax.to(this.l._reactInternalFiber.child.stateNode, 0.3, { autoAlpha:0 })
  }

  render () {
    return (
      <L className='loading' ref={(e) => { this.l = e }}>
        <div className='imgBox'>
          <div className='uil-ring-css' style={{ transform:'scale(1)' }}><div /></div>
        </div>
      </L>
    )
  }
}

const L = styled.div`
  position:fixed;
  width:100%; height:100%;
  background-color:#1a1d24;
  z-index:999;

  .imgBox {
    position:absolute;
    top:50%; left:50%;
    margin:-50px 0 0 -50px;
    width:100px;

    img {
      display:none;
      
      .desktop & {
        display:block;
      }
    }
  }

  @-webkit-keyframes uil-ring-anim {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes uil-ring-anim {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes uil-ring-anim {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes uil-ring-anim {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes uil-ring-anim {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .uil-ring-css {
    background: none;
    position: relative;
    width: 100px;
    height: 100px;

    & > div {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      top: 0px;
      left: 0px;
      border-radius: 80px;
      box-shadow: 0 3px 0 0 #5fe4e2;
      -webkit-transform-origin: 50px 51.5px;
      transform-origin: 50px 51.5px;
      -webkit-animation: uil-ring-anim 1s linear infinite;
      animation: uil-ring-anim 1s linear infinite; 
    }
  }
`

export default Loading
