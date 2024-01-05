import { useLocation } from "@remix-run/react";
import { ArrowLeft } from "./icons/ArrowLeft";

export function Title({ children }: { children: string }) {
  const location = useLocation();

  return (
    <h1 className="text-3xl font-bold text-gray-800 bg-cyan-800 text-white p-2 flex gap-2 items-center">
      {location.pathname !== "/" && (
        <a href="/">
          <ArrowLeft />{" "}
        </a>
      )}
      {children}
    </h1>
  );
}
