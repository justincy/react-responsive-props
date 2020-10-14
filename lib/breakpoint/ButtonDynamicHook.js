import styles from "../Button.module.css";
import useBreakpoints from "../useBreakpoints";

const defaultSize = "";
const defaultColor = "#eee";

function useResponsiveProp(props, propName, defaultValue) {
  const { active } = useBreakpoints();
  const activeCapitalized = active[0].toUpperCase() + active[1];
  return props[`${propName}${activeCapitalized}`] || defaultValue;
}

export default function DynamicButton({ children, ...props }) {
  const activeSize = useResponsiveProp(props, 'size', defaultSize);
  const activeColor = useResponsiveProp(props, 'color', defaultColor);
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
