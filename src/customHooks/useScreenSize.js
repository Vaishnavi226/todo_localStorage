import { useEffect, useState } from "react";

const useScreenSize = (breakpoint) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  // function to handel width change
  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoint);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useScreenSize;
