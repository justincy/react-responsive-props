import useBreakpoints from "../useBreakpoints";

export default function MakeResponsive(WrappedComponent, responsiveProps = []) {
  function MakeResponsiveWrapper(props) {
    const { active } = useBreakpoints();
    const activeCapitalized = active[0].toUpperCase() + active[1];
    const modifiedProps = { ...props };
    // Process the responsive props to extract responsive values
    for (const prop of responsiveProps) {
      const breakpointProp = `${prop}${activeCapitalized}`;
      if (props[breakpointProp]) {
        modifiedProps[prop] = props[breakpointProp];
      }
    }
    return <WrappedComponent {...modifiedProps} />;
  }
  MakeResponsiveWrapper.displayName = `MakeResponsive(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return MakeResponsiveWrapper;
}
