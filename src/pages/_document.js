import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import '../styles/fonts.js'

export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css' integrity='sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB' crossOrigin='anonymous' />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

injectGlobal`
  body {
    color:#fff;
    background-color:#1a1d24;
  }

  .font-raleway{
    font-family:'Raleway', sans-serif;
    font-weight:100; 
  }
  .font-ralewayBold{
    font-family:'Raleway', sans-serif;
    font-weight:700; 
  }
  .font-muli{
    font-family:'Muli', sans-serif;
    font-weight:300; 
  }
  .font-ptsans{
    font-family:'PT Sans', sans-serif;
    font-weight:400;
  }
  .font-nixieone{
    font-family:'Nixie One', cursive;
    font-weight:400;
  }

  .highlight {
    color:#5fe4e2;
  }
`
