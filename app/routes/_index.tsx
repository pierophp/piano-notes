import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [{ title: "Keyboard" }, { name: "description", content: "Keyboard" }];
};

export default function Index() {
  return (
    <div className="p-2">
      <a href="/dont-let-me-down">Don't let me down</a>
    </div>
  );
}
