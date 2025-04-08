import { Link, Outlet } from "react-router-dom";
import { RiFullscreenExitFill } from "react-icons/ri";
import useHeader from "src/hooks/useHeader";
import Header from "src/components/layouts/Header";
import Footer from "src/components/layouts/Footer";
import { links } from "src/constants/menu";

const Layout = () => {
  const { setOpenMenu, openMenu, scroll, setScroll } = useHeader();
  return (
    <div className="w-full relative flex flex-col items-center min-h-dvh dark:bg-slate-900 bg-[#f0f0f0]">
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        scroll={scroll}
        setScroll={setScroll}
      />
      <Outlet />
      <Footer />
      {openMenu && (
        <div className="fixed w-full h-dvh bg-white/75 dark:bg-black/75">
          <button onClick={() => setOpenMenu(!openMenu)} className="z-50">
            <RiFullscreenExitFill className="text-3xl absolute right-11 md:right-40 top-7 md:top-10 bg-transparent dark:text-white" />
          </button>

          <div className="mt-20 flex flex-col gap-y-6 items-end mr-10 md:mr-40">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="text-4xl font-medium dark:text-white"
              >
                <span>{link.displayName}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
