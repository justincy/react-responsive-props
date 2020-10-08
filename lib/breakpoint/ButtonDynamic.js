import styles from "../Button.module.css";
import useBreakpoints from "../useBreakpoints";

const defaultSize = "";
const defaultColor = "#eee";

// It seems like type checking, whether via PropTypes or Typescript would be pretty difficult or verbose.

export default function DynamicButton({ children, ...props }) {
  const { active } = useBreakpoints();
  // The active breakpoint comes out lowercase but for the props
  // the first letter of the breakpoint needs to be capitalized.
  const activeCapitalized = active[0].toUpperCase() + active[1];
  // Now we dynamically lookup the value of each responsive prop
  // according to the active breakpoint.
  const activeSize = props[`size${activeCapitalized}`] || defaultSize;
  const activeColor = props[`color${activeCapitalized}`] || defaultColor;
  const buttonClasses = [styles.base];
  if (styles[activeSize]) {
    buttonClasses.push(styles[activeSize]);
  }
  return (
    <button
      className={buttonClasses.join(" ")}
      style={{ backgroundColor: activeColor }}
    >
      {children}
    </button>
  );
}
