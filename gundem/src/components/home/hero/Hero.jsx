import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault()
    window.location.hash = '#/contact'
  }

  const handleCalculatorClick = (e) => {
    e.preventDefault()
    window.location.hash = '#/team'
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='GÜVENLE İNŞA EDİN' title='Profesyonel Yapı Denetim ve Destek Hizmetleri' />
            <p>Uzman kadromuz ile yapılarınızın güvenli ve standartlara uygun inşa edilmesini sağlıyoruz. Modern hesaplama araçlarımız ile maliyetlerinizi önceden planlayın!</p>
            <div className='button'>
              <button className='hero-btn primary-btn' onClick={handleContactClick}>
                BİZE ULAŞIN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='hero-btn secondary-btn' onClick={handleCalculatorClick}>
                YAPI HESAP <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='hero-spacer'></div>
    </>
  )
}

export default Hero
