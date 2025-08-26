import React, { useEffect, useState } from "react";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  // Check the local storage or user's preference for the initial theme
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
  );

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery?.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        {
          element.classList.add("dark");
          localStorage.setItem("theme", "dark");
          console.log("dark theme");
        }
        break;
      case "light":
        {
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
          console.log("light theme");
        }
        break;
      default: {
        localStorage.removeItem("theme");
        onWindowMatch();
        console.log("system theme");
      }
    }
  }, [theme]);

  darkQuery.addEventListener("change", onWindowMatch);

  // Function to handle theme change
  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === "dark" || selectedTheme === "light") {
      setTheme(selectedTheme);
    }
  };
  return (
    <header
      data-aos="fade"
      data-aos-duration="300"
      className="sticky top-0 z-20 w-full max-w-[100vw] overflow-x-hidden border-b-[1px] border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-2xl text-white md:text-3xl ">
          <a href="/#home" className="">
            GÜNDEM
            <span className="inline-block font-bold text-primary dark:text-black">
              YAPI DENETİM
            </span>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="cursor pointer group relative">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Ana Sayfa{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">Kurumsal</li>
                  <li className="p-2 hover:bg-violet-200">Hakkımızda</li>
                  <li className="p-2 hover:bg-violet-200">Belgelerimiz</li>
                </ul>
              </div>
            </li>
            <li className="cursor pointer group">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Hizmetlerimiz{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
                <div className="grid grid-cols-3 gap-5 ">
                  <div className="overflow-hidden">
                    <img
                      className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      src="/assets/building1.jpg"
                      alt="Yapı Denetim"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="pb-3 text-xl font-semibold">Yapı Denetim Hizmetlerimiz</h1>
                    <p className="text-sm text-slate-600">
                      4708 sayılı Yapı Denetimi Hakkında Kanun kapsamında, yapılarınızın proje ve yapım
                      süreçlerinde kalite ve güvenliği sağlıyoruz. Uzman kadromuz ve modern laboratuvar
                      altyapımız ile hizmetinizdeyiz.
                    </p>
                    <div className="grid grid-cols-3 ">
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Temel Hizmetler
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Yapı Denetimi
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Proje Kontrolleri
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          İş Güvenliği
                        </li>
                      </ul>
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Teknik Hizmetler
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Zemin Etüdü
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Malzeme Testleri
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Kalite Kontrol
                        </li>
                      </ul>
                      <div>
                        <img src="/assets/building2.jpg" alt="Yapı Denetim Hizmeti" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cursor pointer">
              <a href="/#contact">İletişim</a>
            </li>
            <div className="flex items-center gap-4">
              <li>
                <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
              </li>
              <li>
                <div>
                  <p className="text-sm">Bize Ulaşın</p>
                  <p className="text-lg">0850 123 45 67</p>
                </div>
              </li>
            </div>

            <button onClick={() => handleThemeChange("dark")}> Koyu Tema</button>
            <button onClick={() => handleThemeChange("light")}> Açık Tema</button>
            {/* <button onClick={() => handleThemeChange("dark")}> dark</button>
            <button onClick={() => handleThemeChange("light")}> light</button>
            <button onClick={() => handleThemeChange("system")}> system</button> */}
          </ul>
        </div>
        <div className="block md:hidden ">
          <BiMenu className="text-2xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
