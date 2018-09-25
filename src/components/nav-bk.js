import React from 'react'
import { Link, Router } from '../../routes'
import styled from 'styled-components'
// import { Button } from 'reactstrap'

import icoHome from '../static/ico-home.png'
import icoAbout from '../static/ico-about.png'
import icoWork from '../static/ico-work.png'
import icoContact from '../static/ico-contact.png'
// import icoFullscreen from '../static/ico-fullscreen.png'

// const links = [
//   { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = () => (
  <Navigation>
    {/* <ul>
      <li>
        <Link prefetch href='/'>
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul> */}

    {/* <ul>
      <li><Link route='blog' params={{ slug: 'hello-world' }}><Button color='primary'><a>Blog: Hello world</a></Button></Link></li>
      <li><Link route='blog' params={{ slug: 'another-blog-post' }}><Button color='primary'><a>Blog: Another blog post</a></Button></Link></li>
      <li><Link route='blog' params={{ slug: 'non-existant' }}><Button color='primary'><a>Blog: Not found</a></Button></Link></li>
      <li><Button color='primary' onClick={() => Router.pushRoute('about', { foo: 'bar' })}>About foo bar</Button></li>
      <li><Button color='primary' onClick={() => Router.pushRoute('about', { foo: 'baz' })}>About foo baz</Button></li>
    </ul> */}

    <div className='menuContainer font-muli px-2 px-md-4'>
      <div className='menuContent'>
        <Link prefetch href='/'>
          <a><span><img src={icoHome} />HOME</span></a>
        </Link>
        {' / '}
        <Link prefetch route='/about'>
          <a><span><img src={icoAbout} />ABOUT</span></a>
        </Link>
        {' / '}
        <Link prefetch route='blog' params={{ slug: 'hello-world' }}>
          <a><span><img src={icoWork} />WORKS</span></a>
        </Link>
        {' / '}
        <Link prefetch route='counter'>
          <a><span><img src={icoContact} />CONTACT</span></a>
        </Link>
      </div>
      <div className='copyright'>© Copyright 2017 Darren Chan. All Rights Reserved.</div>
    </div>
  </Navigation>
)

const Navigation = styled.nav`
  .menuContainer {
    position:fixed;
    bottom:0; left:0;
    width:100%;
    min-height:46px;
    background-color:rgba(0, 0, 0, 0.5);
    z-index:1;
    font-size:12px;

    .menuContent {
      float:right;
      color:#9d9d9d;

      a {
        position:relative;
        display:inline-block;
        color:#9d9d9d;
        text-decoration:none;
        padding:14px 20px;
        transition:0.5s;

        &:hover {
          color:#fff;

          span {

            img {
              opacity:1;
            }
          }
        }

        &.page-layout__nav-item--active {
          color:#fff;
          font-weight: bold;

          &:before {
            content:'';
            position:absolute;
            top:0; left:20px;
            width:calc(100% - 40px);
            border-top:3px solid #5fe4e2;
          }

          span {

            img {
              opacity:1;
            }
          }
        }

        span {
          position:relative;
          display:block;
          padding:0 0 0 20px;

          img {
            opacity:0.5;
            position: absolute;
            top: 50%; left: 0;
            -webkit-transform: translate(0, -50%);
            -moz-transform: translate(0, -50%);
            -o-transform: translate(0, -50%);
            -ms-transform: translate(0, -50%);
            transform: translate(0, -50%);
            transition:0.5s;
          }
        }
      }
    }

    .copyright {
      float:left;
      color:#fff;
      padding:14px 0;
    }
  }

  @media (max-width: 768px) {
    .menuContainer {
      text-align:center;

      .menuContent {
        float:none;
      }

      .copyright {
        float:none;
        padding-top:0;
      }
    }
  }
`

export default Nav
