import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useHeader = () => {
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(false);
  const navigation = useLocation();

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
  }, [navigation]);

  return {
    scroll,
    setScroll,
    openMenu,
    setOpenMenu,
    theme,
    setTheme,
  };
};

export default useHeader;
