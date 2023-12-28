import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [{ title: "Keyboard" }, { name: "description", content: "Keyboard" }];
};

export default function Index() {
  return (
    <div className="p-2">
      <div>
        <a href="/beatles-dont-let-me-down">Beatles - Don't let me down</a>
      </div>
      <div>
        <a href="/mario-bowser-castle-theme">Mario - Bowser's Castle Theme</a>
      </div>
    </div>
  );
}
