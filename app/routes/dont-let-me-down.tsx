import type { MetaFunction } from "@remix-run/node";
import { Keyboard, Note } from "~/components/Keyboard";
import { Title } from "~/components/Title";

export const meta: MetaFunction = () => {
  return [{ title: "Keyboard" }, { name: "description", content: "Keyboard" }];
};

export default function DontLetMeDown() {
  const notesGroups: Note[][] = [
    [
      { note: "G#", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "F#", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 1 },
    ],
    [
      { note: "G#", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "E", octave: 3 },
      { note: "E", octave: 1 },
      { note: "B", octave: 1 },
      { note: "E", octave: 1 },
    ],
  ];

  return (
    <div className="p-2">
      <Title>Don't let me down</Title>

      <div className="p-2 flex gap-20 flex-wrap">
        {notesGroups.map((notes, index) => (
          <Keyboard key={index} notes={notes} />
        ))}
      </div>
    </div>
  );
}
