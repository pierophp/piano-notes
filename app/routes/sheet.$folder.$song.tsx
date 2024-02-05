import {
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { Title } from "~/components/Title";
import abcjs from "abcjs";
import { Reference } from "~/components/Reference";
import "../css/sheet.folder.song.css";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const modules = import.meta.glob("../songs/abc/*/*.abc", { as: "raw" });

  const songPath = "../songs/abc/" + params.folder + "/" + params.song + ".abc";

  const abc = await modules[songPath]();

  const abcParsed = abcjs.parseOnly(abc);
  const lines = abc.split("\n");
  const titleLine = lines.find((line) => line.startsWith("T:"));

  const references = lines
    .filter((line) => line.startsWith("% REF:"))
    .map((line) => {
      const r = line.substring(7).split("http");
      return {
        title: r[0].trim(),
        url: "http" + r[1].trim(),
      };
    });

  return json({
    abc,
    abcParsed,
    title: titleLine?.split("T:")[1] ?? "",
    references,
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.title },
    { name: "description", content: data?.title },
  ];
};

export default function SheetSong() {
  const { abc, title, references } = useLoaderData<typeof loader>();

  useEffect(() => {
    abcjs.renderAbc("abc", abc, {
      add_classes: true,
      scale: 1.2,
      format: {
        vocalfont: "Verdana 10",
      },
    });
  }, [abc]);

  return (
    <div>
      <Title>{title}</Title>
      <div id="abc"></div>
      {(references?.length ?? 0) > 0 && (
        <div className="p-2">
          <div className="font-bold">Referências:</div>
          {references?.map((reference, index) => (
            <div key={index}>
              <Reference href={reference.url}>{reference.title}</Reference>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
