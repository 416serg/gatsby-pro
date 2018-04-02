import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props
    if (location.pathname !== '/' && prevProps.location.pathname !== '/') return
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        // Not the homepage, let's expand the header
        this.wrapper.animate([{ height: '20vh' }, { height: '70vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.7, 1)',
          itenartions: 1,
        })
      } else {
        // Not the homepage, let's collapse the header
        this.wrapper.animate([{ height: '70vh' }, { height: '20vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.7, 1)',
          itenartions: 1,
        })
      }
    }
  }

  render() {
    const { data, location } = this.props
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="Level Up Logo" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          sizes={data.background.sizes}
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            overflow: `hidden`,
            zIndex: 1,
            opacity: 0.3,
          }}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
