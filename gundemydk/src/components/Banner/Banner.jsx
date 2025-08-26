import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";

const Banner = () => {
  return (
    <main className="bg-primary ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Yapı Güvenliği Önceliğimiz</h1>
            <p className="">
              Deprem yönetmeliğine uygun yapı denetimi, zemin etüdü ve malzeme kalite kontrolleri
              ile yapılarınızın güvenliğini en üst düzeyde tutuyoruz. Tecrübeli ekibimizle
              projenizin her aşamasında yanınızdayız.
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
              Randevu Al
            </button>
          </div>
          <div className="order-1">
            <img 
              className="aspect-video w-full object-cover rounded-lg"
              src="/assets/building3.jpg"
              alt="Yapı Denetim Hizmetleri"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
