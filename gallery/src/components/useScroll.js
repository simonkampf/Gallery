import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

const useScroll = loading => {
  const [scrollPos, setScrollPos] = useState();
  const handleScroll = () => {
    if (!loading && window.scrollY !== 0) {
      setScrollPos(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
    // eslint-disable-next-line
  }, [loading]);
};

export default useScroll;
