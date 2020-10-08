import styles from "../Button.module.css";
import useBreakpoints from "../useBreakpoints";

const defaultSize = "";
const defaultColor = "#eee";

export default function ButtonNaive({
  sizeXs,
  sizeSm,
  sizeMd,
  sizeLg,
  colorXs,
  colorSm,
  colorMd,
  colorLg,
  children
}) {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  let activeSize = defaultSize;
  let activeColor = defaultColor;
  if (isXs) {
    activeSize = sizeXs;
    activeColor = colorXs;
  } else if (isSm) {
    activeSize = sizeSm;
    activeColor = colorSm;
  } else if (isMd) {
    activeSize = sizeMd;
    activeColor = colorMd;
  } else if (isLg) {
    activeSize = sizeLg;
    activeColor = colorLg;
  }
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
