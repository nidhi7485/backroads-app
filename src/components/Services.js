import React from 'react'
import Title from './Title'
import { services } from '../data'
const Services = () => {
  return (
    <section className='section services' id='services'>
      {/* <!-- section title --> */}
      <Title title='our' subTitle='services' />

      {/* <!-- end of section title --> */}
      <div className='service-center section-services'>
        {/* <!-- single service --> */}
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
