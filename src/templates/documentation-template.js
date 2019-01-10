import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function SideBarNav({ allMarkdownRemark }){
  const { edges } = allMarkdownRemark;

  const sectionTitles = edges.reduce((acc, { node, ...rest }) => {
    const { section, title, path } = node.frontmatter;
    if (!acc.hasOwnProperty(section)){
      acc[section] = []
    }
    acc[section].push({ title, path })
    return acc
  },{})
  
  return <ul className='box menu-list'>
    {
      Object.keys(sectionTitles).sort().map(section => {
        const titles = sectionTitles[section];
        return <li key={section}>
          <p>{ section }</p>
          <ul>
            {
              titles.map(({ title, path}) => {
                return <li key={title}>
                  <Link to={path} className='has-text-link'>{ title }</Link>
                </li>
              })
            }
          </ul>
        </li>
      })
    }
  </ul>

}

export default function Template({ data, ...rest }){
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { section, title } = frontmatter;
  return <Layout>
    <SEO title={title} keywords={[section, title]} description={title} />
    <div className='columns box'>
      <div className='column is-4'>
        <SideBarNav allMarkdownRemark={allMarkdownRemark} />
      </div>
      <div className='column'>
        <nav className='breadcrumb is-small box'>
          <ul>
            <li><Link to='/'>GeneNoteBook</Link></li>
            <li><a href='#'>Documentation</a></li>
            <li><a href='#'>{ section }</a></li>
            <li className='is-active'><a href='#' aria-current='page'>{ title }</a></li>
          </ul>
        </nav>
        <div className='box'>
          <h1 className='title'>{title}</h1>
          <div className='markdown' dangerouslySetInnerHTML={{ __html: html }}/>
        </div>  
      </div>
    </div>
    
  </Layout>
}

export const pageQuery = graphql`
  query DocPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        section
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            section
            title
            path
          }
        }
      }
    }
  }
`