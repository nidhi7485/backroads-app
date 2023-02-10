import React from 'react'

const Footer = () => {
  return (
    <footer class='section footer'>
      {/* <!-- footer links --> */}
      <ul class='footer-links'>
        {/* <!-- single link --> */}
        <li>
          <a href='#' class='footer-link scroll-link'>
            home
          </a>
        </li>
        {/* <!-- end of single link --> */}
        {/* <!-- single link --> */}
        <li>
          <a href='#about' class='footer-link scroll-link'>
            about
          </a>
        </li>
        {/* <!-- end of single link --> */}
        {/* <!-- single link --> */}
        <li>
          <a href='#featured' class='footer-link scroll-link'>
            featured
          </a>
        </li>
        {/* <!-- end of single link --> */}
        {/* <!-- single link --> */}
        <li>
          <a href='#sevices' class='footer-link scroll-link'>
            services
          </a>
        </li>
        {/* <!-- end of single link --> */}
        {/* <!-- single link --> */}
        <li>
          <a href='#gallery' class='footer-link scroll-link'>
            gallery
          </a>
        </li>
        {/* <!-- end of single link --> */}
      </ul>
      {/* <!-- end of footer links --> */}

      {/* <!-- footer icons --> */}
      <ul class='footer-icons'>
        {/* <!-- single icon --> */}
        <li>
          <a href='#' class='footer-icon' target='_blank'>
            <i class='fab fa-facebook'></i>
          </a>
        </li>
        {/* <!-- end of single icon --> */}
        {/* <!-- single icon --> */}
        <li>
          <a href='#' class='footer-icon' target='_blank'>
            <i class='fab fa-twitter'></i>
          </a>
        </li>
        {/* <!-- end of single icon --> */}
        {/* <!-- single icon --> */}
        <li>
          <a href='#' class='footer-icon' target='_blank'>
            <i class='fab fa-squarespace'></i>
          </a>
        </li>
        {/* <!-- end of single icon --> */}
      </ul>
      {/* <!-- end of footer icons --> */}
      <p class='copyright'>
        copyright &copy; Backroads travel tour company<span id='date'></span>
      </p>
    </footer>
  )
}

export default Footer
