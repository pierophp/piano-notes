import type { MetaFunction } from "@remix-run/node";
import { Link } from "~/components/Link";
import { Title } from "~/components/Title";
export const meta: MetaFunction = () => {
  return [{ title: "Keyboard" }, { name: "description", content: "Keyboard" }];
};

export default function Index() {
  return (
    <div>
      <Title>Piano Notes</Title>
      <div className="p-2 text-lg">
        <h2 className="text-xl font-bold">Simplificado</h2>
        <div>
          <Link href="/beatles-dont-let-me-down">
            Beatles - Don't let me down
          </Link>
        </div>
        <div>
          <Link href="/john-lennon-imagine">John Lennon - Imagine</Link>
        </div>

        <div className="pt-2">
          <h2 className="text-xl font-bold">Partituras</h2>
          <div>
            <Link href="/mario-bowser-castle-theme">
              Mario - Bowser's Castle Theme
            </Link>
          </div>
        </div>

        <div className="pt-2">
          <h2 className="text-xl font-bold">Escalas</h2>
          <div>
            <Link href="/major-scales">Maiores</Link>
          </div>
          <div>
            <Link href="/minor-scales">Menores</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
