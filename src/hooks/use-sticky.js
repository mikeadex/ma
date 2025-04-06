import { useEffect, useState } from "react";

export default function useSticky() {
  const [stickyMenu, setStickyMenu] = useState(false);
  // sticky
  useEffect(() => {
    const stickyMenuBar = () => {
      if (window.scrollY > 80) {
        setStickyMenu(true);
      } else {
        setStickyMenu(false);
      }
    };
    window.addEventListener("scroll", stickyMenuBar);
  }, []);

  return {
    stickyMenu,
  };
}
