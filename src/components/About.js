import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className='section' id='about'>
      {/* <!-- title --> */}
      <Title title='about' subTitle='us' />

      {/* <!-- end of title --> */}
      <div className='section-center about-center'>
        {/* <!-- section-image-wrapper --> */}
        <article className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome-beach' />
        </article>
        {/* <!-- about-info --> */}
        <article className='about-info'>
          <h3>explore difference</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
