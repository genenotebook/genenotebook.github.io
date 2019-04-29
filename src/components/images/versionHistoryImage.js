import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import render from './render'

export default function VersionHistoryImage(){
  const query = graphql`
    query {
      placeholderImage: file(relativePath: { eq: "version-history.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;
  
  return <StaticQuery query={query} render={render} />
}
