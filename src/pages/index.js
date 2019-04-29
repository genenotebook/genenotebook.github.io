import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import {
  HeroImage,
  GeneModelImage,
  OrthogroupImage,
  ProteinDomainImage,
  ExpressionImage,
  UserProfileImage,
  VersionHistoryImage,
} from '../components/images'
import SEO from '../components/seo'
import CodeBlock from '../components/codeblock'

function OptionsWarning(){
  const [isOpen, setOpen] = useState(true)
  return isOpen && <article className='message is-warning' style={{ maxWidth: 450, margin: 'auto', marginTop: 12 }}>
  <div className='message-header'>
    Additional options
    <button className='delete' aria-label='delete' onClick={() => setOpen(false)}/>
  </div>
  <div className='message-body'>
    For additional information on for instance Docker containers, loading transcriptome data, or configuring user accounts, see the <Link to='/documentation/installation' className='has-text-link'>full documentation</Link>.
  </div>
</article>
}

function IndexPage() {
  return (
    <Layout>
      <SEO description="GeneNoteBook is a collaborative notebook for comparative genomics" title="GeneNoteBook Documentation" />
      <section id='title' className='hero is-light'>
        <div className='hero-body' style={{ padding: 24 }}>
          <div className='container has-text-centered'>
            <div className='title is-size-1 has-text-weight-light'>
              GeneNoteBook
            </div>
            <div className='subtitle'>
              A collaborative notebook for comparative genomics
            </div>
            <p className='is-size-6 has-text-weight-light'>
            Visit <a href='http://bioinformatics.nl/genenotebook' className='has-text-link'>http://bioinformatics.nl/genenotebook</a> for a GeneNoteBook server running on an example dataset.
            </p>
          </div>
        </div>
      </section>

      <section id='main-image' className='hero'>
        <div className='hero-body' style={{ padding: 24 }}>
          <div className='container'>
            <div className='box' style={{ margin: 'auto', maxWidth: 500, padding: 2 }}>
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      <section id='getting-started' className='hero is-light'>
        <div className='hero-body' style={{ padding: 24 }}>
          <div className='container has-text-centered'>
            <div className='title is-size-2'>
              Getting started
            </div>
            <p style={{ paddingBottom: 6 }}>
              Install GeneNoteBook using <a className='has-text-link' href='https://bioconda.github.io/'>bioconda</a>
            </p>
            <CodeBlock>
              > conda install -c bioconda genenotebook
            </CodeBlock>
            <p style={{ paddingBottom: 6, paddingTop: 18 }}>
              Start a GeneNoteBook daemon on localhost:3000
            </p>
            <CodeBlock>
              > genenotebook run
            </CodeBlock>
            <p style={{ paddingBottom: 6, paddingTop: 18 }}>
              Add your data
            </p>
            <CodeBlock>
              > genenotebook add [genome/annotation/...]
            </CodeBlock>
            <OptionsWarning />
          </div> 
        </div>
      </section>
      
      <section id='features' className='hero'>
        <div className='hero-body' style={{ padding: 24 }}>
          <div className='container has-text-centered'>
            <div className='title is-size-2'>
              Features
            </div>

            <div className='tile is-ancestor'>
              <div className='tile is-parent is-3'>
                <article className='tile is-child box'>
                  <p className='title is-4 has-text-weight-normal'>
                    Gene models
                  </p>
                  <GeneModelImage />
                  <p>
                  Browse gene models
                  </p>
                </article>
              </div>

              <div className='tile is-parent is-3'>
                <article className='tile is-child box'>
                  <p className='title is-4 has-text-weight-normal'>
                    Protein domains
                  </p>
                  <ProteinDomainImage />
                </article>
              </div>

              <div className='tile is-parent is-6'>
                <article className='tile is-child box'>
                  <p className='title is-4 has-text-weight-normal'>
                    Orthogroups
                  </p>
                  <OrthogroupImage />
                </article>
              </div>

            </div> {/* End of ancestor tile */}
            <div className='tile is-ancestor'>
              <div className='tile is-parent'>
                <article className='tile is-child box'>
                  <p className='title is-4 has-text-weight-normal'>
                    Expression levels
                  </p>
                  <ExpressionImage />
                </article>
              </div>

              <div className='tile is-parent'>
                <article className='tile is-child box'>
                  <p className='title is-4 has-text-weight-normal'>
                    User profiles
                  </p>
                  <UserProfileImage />
                </article>
              </div>

              <div className='tile is-parent'>
                <article className='tile is-child box'>
                  <p className='title is-4 has-text-weight-normal'>
                    Version history
                  </p>
                  <VersionHistoryImage />
                </article>
              </div>
            </div>
            


          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

