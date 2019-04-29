import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import {
  HeroImage,
  GeneModelImage,
  OrthogroupImage,
  ProteinDomainImage,
  ExpressionImage,
  UserProfileImage,
  VersionHistoryImage,
  QueryImage,
} from '../components/images';
import SEO from '../components/seo';
import CodeBlock from '../components/codeblock';
import { Tile, TileWrapper } from '../components/tile';

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
      <section id='title' className='hero'>
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

      <section id='main-image' className='hero is-light'>
        <div className='hero-body' style={{ padding: 24 }}>
          <div className='container'>
            <div className='box' style={{ margin: 'auto', maxWidth: 500, padding: 2 }}>
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      <section id='getting-started' className='hero'>
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
      
      <section id='features' className='hero is-light'>
        <div className='hero-body' style={{ padding: 24 }}>
          <div className='container has-text-centered'>
            <div className='title is-size-2'>
              Features
            </div>

            <TileWrapper>
              <Tile title="Gene Table" image={<HeroImage />} width={8}>
                <p>
                  Quickly scroll through all genes from multiple organisms and perform custom queries. The Gene Table allows for comparative visualization of Gene Models, Protein Domains and Gene Expression.
                </p>
              </Tile>
              <Tile title="Custom queries" image={<QueryImage />}>
                <p>
                  Any gene attribute is automatically indexed to allow efficient queries.
                  <br/>
                  Query results can be saved in several canonical file formats like fasta for coding sequences, gff3 for genome annotations and tsv for gene expression levels.
                </p>
              </Tile>
            </TileWrapper>
             
            <TileWrapper>
              <Tile title="Gene Models" image={<GeneModelImage />}>
                <p>
                  Visualize the exon structure of predicted Gene Models. Explore predicted alternative splicing. 
                </p>
              </Tile>

              <Tile title="Protein Domains" image={<ProteinDomainImage />} width={3}>
                <p>
                  Visualization of InterProScan predicted protein domains allows for quick assesment of putative protein function.
                  <br/>
                  Links to InterPro based on IDs.
                </p>
              </Tile>

              <Tile title="Orthogroups" image={<OrthogroupImage />} width={5}>
                <p>
                  Orthogroup phylogenetic trees visualize evolutionary relationships between genes. Tree labels are hyperlinks to quickly navigate between members of an orthogroup.
                </p>
              </Tile>
            </TileWrapper>

            <TileWrapper>
              <Tile title="Expression levels" image={<ExpressionImage />} width={5}>
                <p>
                  Expression level barplots automatically display sample sizes of experiments, as well as error bars representing the standard error.
                </p>
              </Tile>

              <Tile title="User profiles" image={<UserProfileImage />} width={3}>
                <p>
                  The user profile system allows for configuration of private access to data.
                </p>
              </Tile>

              <Tile title="Version history" image={<VersionHistoryImage />}>
                <p>
                  Every manually changed annotation is tracked in a version history system, so that at any moment unwanted changes can be reverted.
                </p>
              </Tile>
            </TileWrapper>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

