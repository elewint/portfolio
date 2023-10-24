import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName, bottomMargin } from "./types";

// Note: by assigning threshold to 0.75, we are making that value the default
export function useSectionInView(
  sectionName: SectionName,
  threshold = 0.3,
  bottomMargin: bottomMargin = "-50%"
) {
  const { ref, inView } = useInView({
    threshold: threshold,
    rootMargin: "-15% 0px " + bottomMargin + " 0px",
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
