import React from "react";
import { Link } from "./Link";

export function Reference(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <Link rel="noreferrer" target="_blank" {...props}>
      {props.children}
    </Link>
  );
}
