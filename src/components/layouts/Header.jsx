import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import avatar from "src/assets/avatar.jpeg";
import useHeader from "src/hooks/useHeader";

const Header = ({ setOpenMenu = () => {}, openMenu, scroll, setScroll }) => {
  const { theme, setTheme } = useHeader();

  useEffect(() => {
    if (theme) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openMenu]);

  return (
    <header
      className={`fixed w-full z-y0 ${
        scroll && "shadow-md bg-white/20 dark:bg-slate-900/50 backdrop-blur-lg"
      }`}
    >
      <nav className="flex items-center w-5/6 mx-auto justify-between py-5 md:py-7">
        <Link className="z-50" to="/">
          <div className="flex items-center gap-2">
            <img src={avatar} alt="Logo" className="rounded-full w-12" />
            <p className="text-xl md:text-3xl font-semibold text-black dark:text-white">
              Alexis Olán
            </p>
          </div>
        </Link>
        <span className="rounded-full">
          {!openMenu && (
            <div className="flex items-center gap-5">
              <button onClick={() => setTheme(!theme)}>
                {theme ? (
                  <FaRegSun className="text-2xl md:text-3xl text-black dark:text-white" />
                ) : (
                  <FaMoon className="text-2xl md:text-3xl text-black dark:text-white" />
                )}
              </button>
              <button onClick={() => setOpenMenu(!openMenu)}>
                <TbMenu3 className="text-3xl md:text-4xl text-black dark:text-white" />
              </button>
            </div>
          )}
        </span>
      </nav>
    </header>
  );
};

Header.propTypes = {
  setOpenMenu: PropTypes.func,
  setScroll: PropTypes.func,
  openMenu: PropTypes.bool,
  scroll: PropTypes.bool,
};

export default Header;
