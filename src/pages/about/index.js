import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TweenMax, Power4 } from 'gsap'
import { AboutContainer } from './style.js'

class About extends React.Component {
  static propTypes = {
  }

  static async getInitialProps (props) {
    // const { query, res, store } = props.ctx
    const { store } = props.ctx
    const state = store.getState()

    await new Promise((resolve) => {
      setTimeout(resolve, 700)
    })

    return { state }
  }

  componentDidMount () {
    this.list = document.querySelectorAll('.progress-bar')
    this.arrList = [].slice.call(this.list)
    this.startParcent = {}
    this.parcent = []

    for (let i = 0; i < this.arrList.length; i++) {
      this.startParcent[i] = { value:0 }
      this.parcent[i] = this.arrList[i].getAttribute('aria-valuenow')
    }

    TweenMax.set(this.arrList, { width:0 })

    setTimeout(() => {
      TweenMax.staggerTo(this.arrList, 0.3, {
        cycle: {
          width: (i) => {
            let w = this.arrList[i].getAttribute('aria-valuenow') + '%'
            return w
          }
        },
        ease:Power4.easeOut }, 0.1)

      for (let i = 0; i < this.arrList.length; i++) {
        TweenMax.to(this.startParcent[i], 0.3, {
          value: this.parcent[i],
          onUpdate: () => {
            this.arrList[i].innerHTML = "<span className='font-muli'><small><strong>" + Math.floor(this.startParcent[i].value) + '%</strong></small></span>'
          },
          ease:'linear',
          delay: i * 0.15 })
      }
    }, 800)
  }

  render () {
    return (
      <AboutContainer>
        <div className='container'>
          <div className='row pb-5'>
            <div className='col-12 col-md-12'>
              <h2 className='pt-3 pt-sm-5 title font-nixieone'><strong>About Me</strong></h2>
              <p className='intro'>
                My name is Darren Chan, a Front-End Developer, has worked for over 7 years in web development. I’m an open-mind fast learner. I could pick up a latest technology in a short time. I am a proficient in Frontend technologies with compatible cross browsers and different platforms. I has better to resolving problem for various projects with my web knowledge.
                <br /><br />
                My job duty is using a html, jquery and css to development a Campaign site and corporate site. I interesting in web development and develop some interactive website to the end user.
              </p>
            </div>
          </div>
          <div className='row pb-5'>
            <div className='technicalSkills col-12' ref={e => { this.skills = e }}>
              <h3 className='mb-2 title font-nixieone'><strong>Technical Skills</strong></h3>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <p className='mb-0 label font-muli'><small><strong>HTML / HTML5</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
                <div className='col-12 col-md-5 offset-md-1'>
                  <p className='mb-0 label font-muli'><small><strong>CSS / CSS3</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <p className='mb-0 label font-muli'><small><strong>Javascript / jQuery</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
                <div className='col-12 col-md-5 offset-md-1'>
                  <p className='mb-0 label font-muli'><small><strong>Ajax</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <p className='mb-0 label font-muli'><small><strong>Bootstrap</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='30' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
                <div className='col-12 col-md-5 offset-md-1'>
                  <p className='mb-0 label font-muli'><small><strong>TweenMax</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <p className='mb-0 label font-muli'><small><strong>ReactJS</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='40' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
                <div className='col-12 col-md-5 offset-md-1'>
                  <p className='mb-0 label font-muli'><small><strong>AngularJS</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='10' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <p className='mb-0 label font-muli'><small><strong>Gulp</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='40' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
                <div className='col-12 col-md-5 offset-md-1'>
                  <p className='mb-0 label font-muli'><small><strong>Photoshop</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-5'>
                  <p className='mb-0 label font-muli'><small><strong>AI</strong></small></p>
                  <div className='progress mb-4'>
                    <div className='progress-bar rounded' role='progressbar' style={{ 'width':'0%' }} aria-valuenow='10' aria-valuemin='0' aria-valuemax='100'><span className='font-muli'><small><strong>0%</strong></small></span></div>
                  </div>
                </div>
                <div className='col-12 col-md-5 offset-md-1' />
              </div>
            </div>
          </div>
          <div className='row pb-5'>
            <div className='experience pb-5 col-12 col-md-6 col-lg-5'>
              <h3 className='mb-2 title font-nixieone'><strong>Experience</strong></h3>
              <ul className='list-unstyled'>
                <li className='pb-3 current'>
                  <p className='mb-0'><small>December 2016</small> - <span className='highlight'>Present</span></p>
                  <p className='mb-0 font-nixieone'><strong>Accenture Ltd. - Senior Web Developer</strong></p>
                </li>
                <li className='pt-3 pb-3'>
                  <p className='mb-0'><small>April 2013 - December 2016</small></p>
                  <p className='mb-0 font-nixieone'><strong>Pixo Punch Ltd. - Web Developer</strong></p>
                </li>
                <li className='pt-3 pb-3'>
                  <p className='mb-0'><small>October 2011 - April 2013</small></p>
                  <p className='mb-0 font-nixieone'><strong>Pixo Punch Ltd. - Junior Web Developer</strong></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AboutContainer>
    )
  }
}

export default connect()(About)
