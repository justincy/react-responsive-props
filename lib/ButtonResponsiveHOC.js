import styles from "./Button.module.css";
import MakeResponsive from "./MakeResponsive";

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
