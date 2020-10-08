import Link from "next/link";
import useBreakpoints from "../lib/useBreakpoints.js";

export default function IndexPage() {
  const breakpoints = useBreakpoints();
  return (
    <div>
      <h1>Responsive Prop Patterns in React</h1>
      <ul>
        <li>
          <Link href="conditional">
            <a>Conditional Rendering</a>
          </Link>
        </li>
        <li>
          <Link href="object">
            <a>Object of Props</a>
          </Link>
        </li>
      </ul>
      <p>
        At the foundation of all of these reponsive prop patterns are two hooks:
        <code>useBreakpoints()</code> and <code>useMediaQuery()</code>.{" "}
        <code>useBreakpoints()</code> calls <code>useMediaQuery()</code> once
        for each breakpoint and returns the object printed below. Resize the
        screen to watch the values change.
      </p>
      <pre>{JSON.stringify(breakpoints, null, 2)}</pre>
    </div>
  );
}
