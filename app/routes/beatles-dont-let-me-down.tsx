import type { MetaFunction } from "@remix-run/node";
import { Keyboard, Note } from "~/components/Keyboard";
import { Title } from "~/components/Title";

const title = "Beatles - Don't let me down";

export const meta: MetaFunction = () => {
  return [{ title: title }, { name: "description", content: title }];
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
    [
      { note: "B", octave: 3 },
      { note: "C#", octave: 4 },
      { note: "E", octave: 4 },
      { note: "C#", octave: 4 },
      { note: "G#", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "F#", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 1 },
    ],
    [
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "F#", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 1 },
    ],
    [
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "E", octave: 3 },
      { note: "F#", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 1 },
    ],
  ];

  return (
    <div>
      <Title>{title}</Title>

      <div className="p-2 flex gap-x-20 gap-y-5 flex-wrap">
        {notesGroups.map((notes, index) => (
          <Keyboard key={index} notes={notes} />
        ))}
      </div>
    </div>
  );
}
