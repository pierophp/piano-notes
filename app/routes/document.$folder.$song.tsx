import {
  json,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Title } from "~/components/Title";

export type DocumentSong = {
  title: string;
  url: string;
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const modules = import.meta.glob("../songs/documents/*/*.ts");

  const songPath =
    "../songs/documents/" + params.folder + "/" + params.song + ".ts";

  const { song } = (await modules[songPath]()) as { song: DocumentSong };

  return json({ song });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.song.title },
    { name: "description", content: data?.song.title },
  ];
};

export default function DocumentFolderSong() {
  const { song } = useLoaderData<typeof loader>();

  return (
    <div>
      <Title>{song.title}</Title>
      <img src={song.url} alt={song.title} />
    </div>
  );
}
