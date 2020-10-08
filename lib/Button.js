import styles from "./Button.module.css";

export default function Button({ size, color = "#eee", children }) {
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
}
