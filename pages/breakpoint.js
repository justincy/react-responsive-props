import Link from "next/link";
import Button from "../lib/breakpoint/Button.js";

export default function ArrayPage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Breakpoint Props</h1>
      <Button
        sizeXs="small"
        sizeSm="small"
        sizeMd="medium"
        sizeLg="large"
        colorXs="#B0E0E6"
        colorSm="#2E8B57"
        colorMd="#F5DEB3"
        colorLg="#F08080"
      >
        Button
      </Button>
    </div>
  );
}
