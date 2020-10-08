import useBreakpoints from "../lib/useBreakpoints.js";
import Button from "../lib/Button.js";
import ButtonResponsive from "../lib/ButtonResponsive.js";
import ButtonResponsiveHOC from "../lib/ButtonResponsiveHOC.js";
import Responsive from "../lib/Responsive.js";

const responsiveValues = {
  xs: {
    size: "small",
    color: "#B0E0E6"
  },
  sm: {
    size: "small",
    color: "#2E8B57"
  },
  md: {
    size: "medium",
    color: "#F5DEB3"
  },
  lg: {
    size: "large",
    color: "#F08080"
  }
};

export default function IndexPage() {
  const { active: activeBreakpoint } = useBreakpoints();
  return (
    <div>
      <p>Active breakpoint: {activeBreakpoint}.</p>
      <p>
        <Button size="large">Large</Button> <Button>Medium</Button>{" "}
        <Button size="small">Small</Button>
      </p>
      <h3>Responsive Buttons</h3>
      <p>
        <Responsive props={responsiveValues}>
          {({ size, color }) => (
            <Button size={size} color={color}>
              &lt;Responsive&gt;
            </Button>
          )}
        </Responsive>
      </p>
      <p>
        <ButtonResponsive
          size={{ xs: "small", sm: "small", md: "medium", lg: "large" }}
          color={{ xs: "#B0E0E6", sm: "#2E8B57", md: "#F5DEB3", lg: "#F08080" }}
        >
          ButtonResponsive
        </ButtonResponsive>
      </p>
      <p>
        <ButtonResponsiveHOC
          size={{ xs: "small", sm: "small", md: "medium", lg: "large" }}
          color={{ xs: "#B0E0E6", sm: "#2E8B57", md: "#F5DEB3", lg: "#F08080" }}
        >
          ButtonResponsiveHOC
        </ButtonResponsiveHOC>
      </p>
    </div>
  );
}
