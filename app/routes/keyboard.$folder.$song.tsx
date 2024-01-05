import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Keyboard, Song } from "~/components/Keyboard";
import { Title } from "~/components/Title";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const modules = import.meta.glob("../songs/keyboard/*/*.ts");

  const songPath =
    "../songs/keyboard/" + params.folder + "/" + params.song + ".ts";

  const { song } = (await modules[songPath]()) as { song: Song };

  return json({ song });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.song.title },
    { name: "description", content: data?.song.title },
  ];
};

export default function KeyboardSong() {
  const { song } = useLoaderData<typeof loader>();

  return (
    <div>
      <Title>{song.title}</Title>

      <div className="py-6 px-2">
        {song.notes.map((notes, index) => (
          <Keyboard key={index} notes={notes} />
        ))}
      </div>
    </div>
  );
}
