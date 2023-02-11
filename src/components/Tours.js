import React from 'react'
import Title from './Title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section className='section' id='featured'>
      {/* <!-- section title --> */}
      <Title title='featured' subTitle='tours' />

      {/* <!-- end of section title --> */}

      {/* <!-- featured center --> */}
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } =
            tour
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' />
                <p className='tour-date'>{date}</p>
              </div>
              {/* <!-- tour-info --> */}
              <div className='tour-info'>
                <h4>{title}</h4>
                <p>{info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fa fas-map'></i>
                      {location}
                    </span>
                  </p>
                  <p>{duration}days</p>
                  <p>${cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <div className='tour-btn'>
        <a href='#' className='btn'>
          all tour
        </a>
      </div>
    </section>
  )
}

export default Tours
