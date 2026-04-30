import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay needed
      }
    }
  }, [location]);

  return null;
}

export default ScrollToHash;