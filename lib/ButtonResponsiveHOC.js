import styles from "./Button.module.css";
import useBreakpoints from "./useBreakpoints";

function MakeResponsive(WrappedComponent, responsiveProps = []) {
  function MakeResponsiveWrapper(props) {
    console.log("props", props);
    const { active } = useBreakpoints();
    const modifiedProps = { ...props };
    // Process the responsive props to extract responsive values
    for (const prop of responsiveProps) {
      console.log(prop, props[prop]);
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

export default MakeResponsive(
  function Button({ size, color = "#eee", children }) {
    const buttonClasses = [styles.base];
    if (size && styles[size]) {
      buttonClasses.push(styles[size]);
    }
    return (
      <button
        className={buttonClasses.join(" ")}
        style={{ backgroundColor: color }}
      >
        {children}
      </button>
    );
  },
  ["size", "color"]
);
