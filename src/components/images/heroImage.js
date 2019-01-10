import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import render from './render'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */



export default function HeroImage(){
  const query = graphql`
    query {
      placeholderImage: file(relativePath: { eq: "genenotebook_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;
  
  return <StaticQuery query={query} render={render} />
}


// export { HeroImage, GeneModelImage }
