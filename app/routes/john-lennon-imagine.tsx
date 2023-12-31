import type { MetaFunction } from "@remix-run/node";
import { Keyboard, Note } from "~/components/Keyboard";
import { Title } from "~/components/Title";

const title = "John Lennon - Imagine";

export const meta: MetaFunction = () => {
  return [{ title: title }, { name: "description", content: title }];
};

export default function DontLetMeDown() {
  const notesGroups: Note[][] = [
    [
      { note: "G", octave: 1, section: "Intro (2x)" },
      { note: "E", octave: 1, index: 1 },
      { note: "C", octave: 1, obs: "1+2 3x" },
      { note: "B", octave: 1 },
      { note: "C", octave: 1 },
    ],
    [
      { note: "A", octave: 1 },
      { note: "F", octave: 1, index: 1 },
      { note: "C", octave: 1, obs: "1+2 3x" },
      { note: "A", octave: 2, obs: "Mão direita" },
      { note: "A#", octave: 2 },
      { note: "B", octave: 2 },
    ],
    [
      { note: "G", octave: 1, section: "Vocal Intro (4x)" },
      { note: "C", octave: 1, index: 1 },
      { note: "E", octave: 1, index: 1 },
      { note: "G", octave: 2, obs: "Imagine all the" },
      { note: "G", octave: 2 },
      { note: "G", octave: 2 },
      { note: "G", octave: 2 },
      { note: "B", octave: 2 },
    ],
    [
      { note: "A", octave: 1 },
      { note: "C", octave: 1, index: 1 },
      { note: "F", octave: 1, index: 1 },
      { note: "B", octave: 2, index: 1, obs: "people" },
      { note: "A", octave: 2 },
    ],
    [
      { note: "A", octave: 1, section: "Vocal Pré-Refrão" },
      { note: "C", octave: 2, index: 1 },
      { note: "A", octave: 2, obs: "Imagine all the" },
      { note: "C", octave: 3 },
      { note: "A", octave: 2 },
      { note: "C", octave: 3 },
      { note: "E", octave: 3 },
      { note: "E", octave: 3 },
      { note: "E", octave: 1, index: 7 },
      { note: "A", octave: 1, index: 7 },
      { note: "D", octave: 3 },
    ],
    [
      { note: "G", octave: 1 },
      { note: "B", octave: 1, index: 1 },
      { note: "B", octave: 2, index: 1, obs: "Living for today" },
      { note: "B", octave: 2 },
      { note: "B", octave: 2 },
      { note: "C", octave: 3 },
      { note: "D", octave: 3 },
      { note: "E", octave: 2 },
      { note: "G", octave: 2 },
      { note: "E", octave: 2 },
      { note: "D", octave: 2 },
      { note: "C", octave: 2 },
    ],
  ];

  return (
    <div className="p-2">
      <Title>{title}</Title>

      <div className="p-2 flex gap-x-20 gap-y-5 flex-wrap">
        {notesGroups.map((notes, index) => (
          <Keyboard key={index} notes={notes} />
        ))}
      </div>
    </div>
  );
}
