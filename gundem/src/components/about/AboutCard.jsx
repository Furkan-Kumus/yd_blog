import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='contact-section'>
        <div className='container'>
          <Heading subtitle='İLETİŞİM' title='Bizimle İletişime Geçin' />
          <div className='flexSB contact-wrapper'>
            <div className='left row contact-info'>
              <div className='info-block'>
                <div className='info-icon'>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className='info-text'>
                  <h5>Adres</h5>
                  <p> Antalya, Döşemealtı Türkiye</p>
                  <p>Gündem Yapı Denetim</p>
                </div>
              </div>
              <div className='info-block'>
                <div className='info-icon'>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className='info-text'>
                  <h5>Telefon</h5>
                  <p>(+90) </p>
                  <p>(+90) </p>
                </div>
              </div>
              <div className='info-block'>
                <div className='info-icon'>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className='info-text'>
                  <h5>E-posta</h5>
                  <p>info@.com</p>
                  <p>support@.com</p>
                </div>
              </div>
              <div className='contact-icons'>
                <i className="fab fa-facebook-f icon" onClick={() => window.open('https://www.facebook.com', '_blank')} style={{ cursor: 'pointer' }}></i>
                <i className="fab fa-instagram icon" onClick={() => window.open('https://www.instagram.com/', '_blank')} style={{ cursor: 'pointer' }}></i>
                <i className="fab fa-whatsapp icon" onClick={() => window.open('https://wa.me/', '_blank')} style={{ cursor: 'pointer' }}></i>
              </div>
            </div>
            <div className='right row'>
              <div className='maps-container'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.3987604084758!2d30.592079969668895!3d37.01945619826158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38b95bf6d8ac5%3A0x2092a138ff54635b!2zQmFow6dleWFrYSwgMDcxOTAgRMO2xZ9lbWVhbHTEsS9BbnRhbHlh!5e0!3m2!1str!2str!4v1751975643554!5m2!1str!2str"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
