import React from "react";

export function Link(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a className="hover:text-blue-600" {...props}>
      {props.children}
    </a>
  );
}
