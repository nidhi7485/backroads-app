import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* <!-- nav header --> */}
        <div className='nav-header'>
          <img src={logo} className='nav-logo' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {/* <!-- single link --> */}
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            )
          })}

          {/* <!-- end of single link --> */}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className={icon}
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
