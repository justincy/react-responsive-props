import useBreakpointIndex from "./useBreakpointIndex";

export default function MakeResponsive(WrappedComponent, responsiveProps = []) {
  function MakeResponsiveWrapper(props) {
    const index = useBreakpointIndex();
    const modifiedProps = { ...props };
    // Process the responsive props to extract responsive values
    for (const prop of responsiveProps) {
      if (props[prop]) {
        modifiedProps[prop] = props[prop][index];
      }
    }
    return <WrappedComponent {...modifiedProps} />;
  }
  MakeResponsiveWrapper.displayName = `MakeResponsive(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return MakeResponsiveWrapper;
}
