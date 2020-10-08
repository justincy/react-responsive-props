/**
 * Given a map of breakpoints and values, return the value for
 * the breakpoint that is enabled.
 */
import useBreakpoints from "./useBreakpoints";

export default function useBreakpointValues(breakpointValues) {
  const { active } = useBreakpoints();
  return breakpointValues[active];
}
