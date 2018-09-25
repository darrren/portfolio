import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { I18n as I18nR, I18nextProvider } from 'react-i18next'
import initialI18nInstance from '../../i18n'
import Head from '../components/head'
import Nav from '../components/nav'
import Loading from '../components/loading'

import createStore from '../../store'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  constructor (props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  render () {
    const { Component, pageProps, store } = this.props
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {}

    return (
      <div>
        <Loading />
        <Container>
          <I18nextProvider
            i18n={i18n || initialI18nInstance}
            initialI18nStore={initialI18nStore}
            initialLanguage={initialLanguage}
          >
            <React.Fragment>
              <Provider store={store}>
                <div>
                  <Nav />
                  <Head title="Darren's Portfolio" />
                  <Component {...pageProps} />
                </div>
              </Provider>
            </React.Fragment>
          </I18nextProvider>
        </Container>
      </div>
    )
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))
