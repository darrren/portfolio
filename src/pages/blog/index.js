import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' }
]

class Blog extends React.Component {
  static async getInitialProps (props) {
    const { query, res, store } = props.ctx
    const post = posts.find(post => post.slug === query.slug)
    const state = store.getState()

    if (!post && res) {
      res.statusCode = 404
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 700)
    })

    return { post, state }
  }

  componentDidMount () {
    console.log('!!')
    console.log(this.props.state)
  }

  render () {
    const { post } = this.props

    if (!post) {
      return (
        <div>
          <H1>Post not found</H1>
        </div>
      )
    }

    return (
      <div>
        <H1>asdf</H1>
        <H1>{post.title}</H1>
      </div>
    )
  }
}

const H1 = styled.h1`
  color:#f00;
`

export default connect()(Blog)
