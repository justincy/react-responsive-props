import Link from "next/link";
import ButtonNaive from "../lib/breakpoint/ButtonNaive.js";
import ButtonDynamic from "../lib/breakpoint/ButtonDynamic.js";
import ButtonHOC from "../lib/breakpoint/ButtonHOC.js";

export default function ArrayPage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Breakpoint Props</h1>
      <ButtonNaive
        sizeXs="small"
        sizeSm="small"
        sizeMd="medium"
        sizeLg="large"
        colorXs="#B0E0E6"
        colorSm="#2E8B57"
        colorMd="#F5DEB3"
        colorLg="#F08080"
      >
        Naive Impl
      </ButtonNaive>
      <ButtonDynamic
        sizeXs="small"
        sizeSm="small"
        sizeMd="medium"
        sizeLg="large"
        colorXs="#B0E0E6"
        colorSm="#2E8B57"
        colorMd="#F5DEB3"
        colorLg="#F08080"
      >
        Dynamic Impl
      </ButtonDynamic>
      <ButtonHOC
        sizeXs="small"
        sizeSm="small"
        sizeMd="medium"
        sizeLg="large"
        colorXs="#B0E0E6"
        colorSm="#2E8B57"
        colorMd="#F5DEB3"
        colorLg="#F08080"
      >
        HOC Impl
      </ButtonHOC>
    </div>
  );
}
