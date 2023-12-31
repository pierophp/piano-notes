import { useLocation } from "@remix-run/react";

export function Title({ children }: { children: string }) {
  const location = useLocation();

  return (
    <h1 className="text-3xl font-bold text-gray-800 bg-cyan-800 text-white p-2">
      {location.pathname !== "/" && <a href="/">&#x3C;- </a>}
      {children}
    </h1>
  );
}
