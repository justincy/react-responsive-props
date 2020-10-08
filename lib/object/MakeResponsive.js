import useBreakpoints from "../useBreakpoints";

export default function MakeResponsive(WrappedComponent, responsiveProps = []) {
  function MakeResponsiveWrapper(props) {
    const { active } = useBreakpoints();
    const modifiedProps = { ...props };
    // Process the responsive props to extract responsive values
    for (const prop of responsiveProps) {
      if (props[prop]) {
        modifiedProps[prop] = props[prop][active];
      }
    }
    return <WrappedComponent {...modifiedProps} />;
  }
  MakeResponsiveWrapper.displayName = `MakeResponsive(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return MakeResponsiveWrapper;
}
