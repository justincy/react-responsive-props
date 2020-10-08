import Link from "next/link";
import Button from "../lib/Button";
import Breakpoint from "../lib/conditional/Breakpoint";

export default function ConditionalPage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Conditional Rendering</h1>
      <Breakpoint at="xs">
        <Button size="small" color="#B0E0E6">
          Breakpoint xs
        </Button>
      </Breakpoint>
      <Breakpoint at="sm">
        <Button size="small" color="#2E8B57">
          Breakpoint sm
        </Button>
      </Breakpoint>
      <Breakpoint at="md">
        <Button size="medium" color="#F5DEB3">
          Breakpoint md
        </Button>
      </Breakpoint>
      <Breakpoint at="lg">
        <Button size="large" color="#F08080">
          Breakpoint lg
        </Button>
      </Breakpoint>
    </div>
  );
}
