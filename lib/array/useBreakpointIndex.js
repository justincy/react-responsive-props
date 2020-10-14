/**
 * Return the index of the active breakpoint.
 * 
 * xs: 0
 * sm: 1
 * md: 2
 * lg: 3
 */
import useBreakpoints from "../useBreakpoints";

export default function useBreakpointIndex() {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  let index = 0;
  if (isSm) index = 1;
  if (isMd) index = 2;
  if (isLg) index = 3;
  return index;
}
