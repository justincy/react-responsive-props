import useBreakpointValues from "./useBreakpointValues";

export default function Responsive({ props, children, render }) {
  const appliedProps = useBreakpointValues(props);
  if (!(children || render)) {
    console.error("<Responsive> must be given a render prop or children prop.");
  }
  const renderFn = children || render;
  return renderFn(appliedProps);
}
