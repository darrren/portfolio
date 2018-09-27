import React from 'react'
import PropTypes from 'prop-types'
import { TweenMax, Power2 } from 'gsap'
import { withI18next } from '../../lib/withI18next'
import Fireflies from './Fireflies'
import { HomeContainer } from './style.js'

class Home extends React.Component {
  static propTypes = {
    t: PropTypes.any
  }

  // static async getInitialProps ({ query, res }) {
  //   // await new Promise((resolve) => {
  //   //   setTimeout(resolve, 3000)
  //   // })
  //   return {}
  // }

  componentDidMount () {
    TweenMax.set('.intro h1, .intro h2, .intro h3', { x:20, rotationY:5, scale:0.85, autoAlpha:0, transformPerspective:200, transformOrigin:'40% 50%' })
    TweenMax.staggerTo('.intro h1, .intro h2, .intro h3', 1, { x:0, rotationY:0, scale:1, autoAlpha:1, ease:Power2.easeOut, delay:1 }, 0.2)
  }

  render () {
    const { t } = this.props
    return (
      <HomeContainer>
        <Fireflies />
        <div className='intro'>
          <h1 className='font-raleway'><span>{t('welcome')}</span></h1>
          {/* <h2 className='font-ralewayBold'><span>My name is D<small>arren</small> C<small>han</small></span></h2>
          <h3 className='font-ralewayBold'><span>A Front-End Web Developer</span></h3> */}
        </div>
      </HomeContainer>
    )
  }
}

export default withI18next(['home', 'common'])(Home)
