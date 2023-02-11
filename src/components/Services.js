import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'
const Services = () => {
  return (
    <section className='section services' id='services'>
      {/* <!-- section title --> */}
      <Title title='our' subTitle='services' />

      {/* <!-- end of section title --> */}
      <div className='service-center section-services'>
        {/* <!-- single service --> */}
        {services.map((service) => {
          return <Service key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services
