import Link from "next/link";
import Button from "../lib/Button.js";
import ButtonResponsive from "../lib/array/ButtonResponsive.js";
import ButtonResponsiveHOC from "../lib/array/ButtonResponsiveHOC.js";
import useBreakpointValues from "../lib/array/useBreakpointValues.js";

const sizes = [ "small", "small", "medium", "large" ];
const colors = [ "#B0E0E6", "#2E8B57", "#F5DEB3", "#F08080" ];

export default function ArrayPage() {
  const currentSize = useBreakpointValues(sizes);
  const currentColor = useBreakpointValues(colors);
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Array of Props</h1>
      <p>
        <Button size={currentSize} color={currentColor}>
          useBreakpointValues()
        </Button>
      </p>
      <p>
        <ButtonResponsive
          size={sizes}
          color={colors}
        >
          ButtonResponsive
        </ButtonResponsive>
      </p>
      <p>
        <ButtonResponsiveHOC
          size={sizes}
          color={colors}
        >
          ButtonResponsiveHOC
        </ButtonResponsiveHOC>
      </p>
    </div>
  );
}
