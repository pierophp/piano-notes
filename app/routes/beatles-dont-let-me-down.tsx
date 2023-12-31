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
      { note: "G#", octave: 3, section: "Don't let me down (2x)" },
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "F#", octave: 1, index: 4 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 2 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 1 },
    ],
    [
      { note: "G#", octave: 3 },
      { note: "G#", octave: 3 },
      { note: "G#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "E", octave: 1, index: 4 },
      { note: "B", octave: 1 },
      { note: "E", octave: 2 },
      { note: "B", octave: 1 },
      { note: "E", octave: 1 },
    ],
    [
      {
        note: "B",
        octave: 3,
        section: "Nobody ever loved me like she does... (2x)",
      },
      { note: "C#", octave: 4 },
      { note: "E", octave: 4 },
      { note: "C#", octave: 4 },
      { note: "G#", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "E", octave: 3 },
      { note: "F#", octave: 3 },
      { note: "F#", octave: 1, index: 8 },
      { note: "C#", octave: 2 },
      { note: "F#", octave: 2 },
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
    [
      { note: "B", octave: 3, section: "I'm in love for the first time..." },
      { note: "G#", octave: 3 },
      { note: "B", octave: 3 },
      { note: "B", octave: 3 },
      { note: "G#", octave: 3 },
      { note: "B", octave: 3 },
      { note: "B", octave: 3 },
      { note: "E", octave: 1 },
      { note: "E", octave: 2 },
      { note: "D#", octave: 2 },
    ],
    [
      { note: "B", octave: 3, section: "Don't you know it's gonna last?..." },
      { note: "C#", octave: 4 },
      { note: "E", octave: 4 },
      { note: "C#", octave: 4 },
      { note: "B", octave: 3 },
      { note: "G#", octave: 3 },
      { note: "B", octave: 3 },

      { note: "E", octave: 1 },
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
