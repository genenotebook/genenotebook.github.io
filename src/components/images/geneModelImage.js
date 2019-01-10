import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import render from './render'

export default function GeneModelImage(){
  const query = graphql`
    query {
      placeholderImage: file(relativePath: { eq: "genemodel.png" }) {
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
