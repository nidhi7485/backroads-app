import React from 'react'
import { pageLinks, socialLinks } from '../data'
const Footer = () => {
  return (
    <footer class='section footer'>
      {/* <!-- footer links --> */}
      <ul class='footer-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link
          return (
            <li key={id}>
              <a href={href} class='footer-link scroll-link'>
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      {/* <!-- footer icons --> */}
      <ul class='footer-icons'>
        {/* <!-- single icon --> */}
        {socialLinks.map((socialicon) => {
          const { id, href, icon } = socialicon
          return (
            <li key={id}>
              <a
                href={href}
                class='footer-icon'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i class={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      {/* <!-- end of footer icons --> */}
      <p class='copyright'>
        copyright &copy; Backroads travel tour company
        <span id='date'>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default Footer
