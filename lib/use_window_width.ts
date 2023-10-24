import { useEffect, useState } from "react";

type WindowWidth = {
  width: number | undefined;
};

const useWindowWidth = (): WindowWidth => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>({
    width: undefined,
  });

  useEffect(() => {
    // Only execute all the code below in client side

    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  // Return the width so we can use it in our components
  return windowWidth;
};

export default useWindowWidth;
