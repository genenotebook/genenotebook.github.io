import React, { useState } from 'react'
import { Link } from 'gatsby'

import githubIcon from '../images/github-icon.svg'


function Header({ siteTitle }) {
  const [ isActive, setActive ] = useState(false);
  const activeString = isActive ? 'is-active': '';
  return <nav className='navbar is-info is-bold' role='navigation'>
    <div className='navbar-brand'>
      <Link to='/' className='navbar-item'>
        { siteTitle }
      </Link>
      <button className={`navbar-burger burger button is-info${activeString}`} aria-label="menu" aria-expanded="false" data-target="navbarContent" onClick={() => { setActive(!isActive) }}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
    <div id='navbarContent' className={`navbar-menu ${activeString}`}>
      <div className='navbar-end'>
        <Link to='/#getting-started' className='navbar-item'>
          Getting started
        </Link>
        <Link to='/#features' className='navbar-item'>
          Features
        </Link>
        <Link to='/documentation/installation' className='navbar-item'>
          Documentation
        </Link>
        <a className='navbar-item' href='https://github.com/genenotebook/genenotebook'>
          <img src={githubIcon} alt='github-icon' style={{ width: 40 }} />
        </a>
      </div>
    </div>
  </nav>
}

export default Header
