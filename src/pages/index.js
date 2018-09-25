import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadData, startClock, tickClock } from '../../actions'
// import Page from '../components/page'
import Home from './home'

class Index extends React.Component {
  static propTypes = {
    dispatch: PropTypes.any
  }

  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 700)
    })

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(startClock())
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        {/* <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' /> */}
        <Home />
      </div>
    )
  }
}

export default connect()(Index)
