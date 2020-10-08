import styles from "./Button.module.css";
import useBreakpointValues from "./useBreakpointValues";

/**
 * Notes:
 *
 * - Default values are painful when props are setup to accept multiple values.
 */

const defaultColors = {
  xs: "#eee",
  sm: "#eee",
  md: "#eee",
  lg: "#eee"
};

export default function Button({ size, color = defaultColors, children }) {
  const appliedSize = useBreakpointValues(size);
  const appliedColor = useBreakpointValues(color);
  const buttonClasses = [styles.base];
  if (styles[appliedSize]) {
    buttonClasses.push(styles[appliedSize]);
  }
  return (
    <button
      className={buttonClasses.join(" ")}
      style={{ backgroundColor: appliedColor }}
    >
      {children}
    </button>
  );
}
