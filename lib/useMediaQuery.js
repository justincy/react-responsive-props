import { useEffect, useState } from "react";

/**
 * Custom hook that tells you whether a given media query is active.
 *
 * Inspired by https://usehooks.com/useMedia/
 * https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has
      // current values of hook args (as this hook callback is created once on mount).
      const handler = (event) => setMatches(event.matches);
      // Set a listener for each media query with above handler as callback.
      mediaQuery.addEventListener("change", handler);
      // Remove listeners on cleanup
      return () => mediaQuery.removeEventListener("change", handler);
    },
    // eslint-disable-next-line
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}
