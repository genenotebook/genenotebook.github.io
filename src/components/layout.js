import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import './styles.sass';

const Layout = ({ children }) => {
  const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
  return <StaticQuery
    query={layoutQuery}
    render={data => (
      <React.Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
      </React.Fragment>
    )}
  />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
