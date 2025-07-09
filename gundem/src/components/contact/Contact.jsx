import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.3987604084758!2d30.592079969668895!3d37.01945619826158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38b95bf6d8ac5%3A0x2092a138ff54635b!2zQmFow6dleWFrYSwgMDcxOTAgRMO2xZ9lbWVhbHTEsS9BbnRhbHlh!5e0!3m2!1str!2str!4v1751975643554!5m2!1str!2str'
  return (
    <>
      <Back showContent={false} />
      <section className='contacts-overlay'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>İletişim</h1>
            <p>Herhangi bir öneri veya soru için bize ulaşabilirsiniz</p>

            <div className='items'>
              <div className='box address-box'>
                <h4>ADRES:</h4>
                <p>Bahçeyaka Mah. 817 Sokak No:53C Değirmen Konakları C Blok Daire:2 Döşemealtı / Antalya</p>
              </div>
              <div className='contact-row'>
                <div className='box'>
                  <h4>E-POSTA:</h4>
                  <p>info@gundemyapidenetim.com</p>
                  <p>support@gundemyapidenetim.com</p>
                </div>
                <div className='box'>
                  <h4>TELEFON:</h4>
                  <p>+90 242 XXX XX XX</p>
                  <p>+90 242 XXX XX XX</p>
                </div>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Adınız' />
                <input type='email' placeholder='E-posta' />
              </div>
              <input type='text' placeholder='Konu' />
              <textarea cols='30' rows='10' placeholder='Mesajınızı buraya yazın...'>
              </textarea>
              <button className='primary-btn'>MESAJ GÖNDER</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
