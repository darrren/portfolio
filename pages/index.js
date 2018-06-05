import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Examples from '../components/examples'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
  }

  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)

    this.unsubscribe = window['__NEXT_REDUX_STORE__'].subscribe(()=>{
      console.log(window['__NEXT_REDUX_STORE__'].getState())
    })
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    this.unsubscribe();
  }

  render () {
    return (
      <Examples />
    )
  }
}

export default connect()(Index)
