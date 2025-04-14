import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import avatar from "src/assets/avatar.jpeg";
import { links } from "src/constants/menu";

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 w-full rounded-t-[45px]">
      <div className="w-5/6 mx-auto pt-5 pb-10">
        <div className="flex items-center justify-between pt-10">
          <p className="text-white text-lg md:text-2xl">
            Let&apos;s Connect There
          </p>
          <button className="bg-white rounded-full py-4 px-4 md:px-6 flex items-center gap-2">
            <p className="hidden lg:block font-semibold text-sm">Hire me</p>
            <TbArrowUpRight className="text-lg md:text-2xl" />
          </button>
        </div>

        <span className="w-full mx-auto h-[1.5px] my-10 block bg-slate-500 rounded-full" />

        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img src={avatar} alt="Logo" className="rounded-full w-12" />
                <p className="text-xl md:text-3xl font-semibold text-white">
                  Alexis Olán
                </p>
              </div>
            </Link>
            <p className="text-white mt-5">
              Feel free to reach out. I&apos;m here to help you turn your ideas
              into real, functional, and professional solutions. Let&apos;s work
              together with trust, transparency, and dedication from day one.
              {/* No dudes en escribirme. Estoy aquí para ayudarte a convertir tus
              ideas en soluciones reales, funcionales y con alto nivel
              profesional. Trabajemos juntos con confianza y compromiso desde el
              primer clic. */}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full xl:w-[50%] justify-between">
            <div>
              <p className="font-semibold text-slate-300 pb-4">Navigation</p>
              <ul>
                {links.map((link) => (
                  <li key={link.id} className="pb-2 text-slate-400">
                    <Link to={link.link}>{link.displayName}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-300 pb-4">Contact</p>
              <ul>
                <li className="pb-2 text-slate-400">+52 9332007527</li>
                <li className="pb-2 text-slate-400">alexisolan@icloud.com</li>
                <li className="pb-2 text-slate-400">alexisolan.com</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-300 pb-4">Chat with me</p>
              <div className="relative">
                <input
                  type="text"
                  className="rounded-2xl py-2 px-3 w-full outline-none"
                  placeholder="Chat with me"
                />
                <button className="bg-slate-900 dark:bg-slate-800 absolute top-0 -right-1 rounded-r-2xl h-full px-3 text-white">
                  <FaArrowRight className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <span className="w-full mx-auto h-[1.5px] my-10 block bg-slate-500 rounded-full" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-white">
          <p className="text-lg md:text-xl">Find me on this platforms</p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2 border-2 border-gray-500 rounded-full px-3 py-2">
              <FaInstagram className="text-xl md:text-sm" />
              <p className="hidden xl:block text-sm">@alexisolan_</p>
            </div>
            <div className="flex items-center gap-2 border-2 border-gray-500 rounded-full px-3 py-2">
              <FaFacebook className="text-xl md:text-sm" />
              <p className="hidden xl:block text-sm">Alexis Olán</p>
            </div>
            <div className="flex items-center gap-2 border-2 border-gray-500 rounded-full px-3 py-2">
              <FaLinkedin className="text-xl md:text-sm" />
              <p className="hidden xl:block text-sm">Alexis Olán</p>
            </div>
            <div className="flex items-center gap-2 border-2 border-gray-500 rounded-full px-3 py-2">
              <FaWhatsapp className="text-xl md:text-sm" />
              <p className="hidden xl:block text-sm">+52 9332007527</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
