/**
 * Given an array values, return the value for the breakpoint that is enabled.
 * Values are specified in this order:
 * 
 * [xs, sm, md, lg]
 */
import useBreakpointIndex from "./useBreakpointIndex";

export default function useBreakpointValues(breakpointValues) {
  const index = useBreakpointIndex();
  return breakpointValues[index];
}
