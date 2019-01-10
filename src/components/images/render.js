import React from 'react'
import Img from 'gatsby-image'

export default function render(data){
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
};

