import React from 'react'
import Title from './Title'
const Tours = () => {
  return (
    <section className='section' id='featured'>
      {/* <!-- section title --> */}
      <Title title='featured' subTitle='tours' />

      {/* <!-- end of section title --> */}

      {/* <!-- featured center --> */}
      <div className='section-center featured-center'>
        {/* <!-- single tour --> */}
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-1.jpeg' className='tour-img' />
            <p className='tour-date'>august 26th, 2022</p>
          </div>
          {/* <!-- tour-info --> */}
          <div className='tour-info'>
            <h4>tibet adventure</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fa fas-map'></i>
                  china
                </span>
              </p>
              <p>6days</p>
              <p>$2100</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour --> */}
        {/* <!-- single tour --> */}
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-2.jpeg' className='tour-img' />
            <p className='tour-date'>october 1st, 2022</p>
          </div>
          {/* <!-- tour-info --> */}
          <div className='tour-info'>
            <h4>best of java</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fa fas-map'></i>
                  indonessia
                </span>
              </p>
              <p>11 days</p>
              <p>$1400</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour --> */}
        {/* <!-- single tour --> */}
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-3.jpeg' className='tour-img' />
            <p className='tour-date'>september 15, 2022</p>
          </div>
          {/* <!-- tour-info --> */}
          <div className='tour-info'>
            <h4>explore hongkong</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fa fas-map'></i>
                  hong kong
                </span>
              </p>
              <p>6days</p>
              <p>$5000</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour --> */}
        {/* <!-- single tour --> */}
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-4.jpeg' className='tour-img' />
            <p className='tour-date'>december 5th, 2022</p>
          </div>
          {/* <!-- tour-info --> */}
          <div className='tour-info'>
            <h4>kennia</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fa fas-map'></i>
                  kenya
                </span>
              </p>
              <p>20days</p>
              <p>$3300</p>
            </div>
          </div>
        </article>
        {/* <!-- end of single tour --> */}
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
