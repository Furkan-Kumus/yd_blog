import React from "react";

const BannerDetails = ({ reverse }) => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.3987604084758!2d30.592079969668895!3d37.01945619826158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38b95bf6d8ac5%3A0x2092a138ff54635b!2zQmFow6dleWFrYSwgMDcxOTAgRMO2xZ9lbWVhbHTEsS9BbnRhbHlh!5e0!3m2!1str!2str!4v1751975643554!5m2!1str!2str';

  return reverse ? (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left md:order-last"
            >
              <h1 className="text-2xl md:text-4xl">
                Neden Gündem Yapı Denetim?
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                20 yılı aşkın tecrübemiz ve uzman kadromuzla yapı denetim sektöründe
                güvenilir çözüm ortağınız olarak yanınızdayız.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  <li className="font-medium">
                    Uzman Mühendis ve Mimar Kadrosu
                  </li>
                  <li className="font-medium">
                    Modern Laboratuvar Altyapısı
                  </li>
                  <li className="font-medium">7/24 Teknik Destek</li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Detaylı Bilgi
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className="order-1"
            >
              <img
                src={reverse}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  ) : (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-[400px] md:h-full">
            <iframe 
              src={map}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800">
            <h1 className="text-3xl font-bold mb-4">İletişim</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Herhangi bir öneri veya soru için bize ulaşabilirsiniz</p>

            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">ADRES:</h4>
                <p className="text-gray-600 dark:text-gray-400">Bahçeyaka Mah. 817 Sokak No:53C Değirmen Konakları C Blok Daire:2 Döşemealtı / Antalya</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">E-POSTA:</h4>
                  <p className="text-gray-600 dark:text-gray-400">info@gundemyapidenetim.com</p>
                  <p className="text-gray-600 dark:text-gray-400">support@gundemyapidenetim.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">TELEFON:</h4>
                  <p className="text-gray-600 dark:text-gray-400">+90 242 XXX XX XX</p>
                  <p className="text-gray-600 dark:text-gray-400">+90 242 XXX XX XX</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/902421234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-medium py-3 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.043L.789 23.456l4.553-1.328C7.203 23.34 9.529 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.38 0-4.574-.812-6.333-2.167l-4.433 1.291 1.321-4.322C1.391 15.177.667 12.69.667 10 .667 4.477 5.477 0 12 0s11.333 4.477 11.333 10c0 5.523-4.81 10-11.333 10z"/>
                </svg>
                WhatsApp ile İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
