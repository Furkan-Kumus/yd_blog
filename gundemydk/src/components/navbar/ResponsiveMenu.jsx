import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Gündem Yapı Denetim</h1>
            <h1 className="text-sm text-slate-500">4708 Sayılı Kanun Kapsamında</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#" className="mb-5 inline-block">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Hizmetlerimiz
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                İletişim
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2025 Tüm Hakları Saklıdır</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
