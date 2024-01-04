import type { MetaFunction } from "@remix-run/node";
import { Keyboard, Note } from "~/components/Keyboard";
import { Title } from "~/components/Title";

const title = "Escalas Maiores";

export const meta: MetaFunction = () => {
  return [{ title: title }, { name: "description", content: title }];
};

export default function DontLetMeDown() {
  const notesGroups: Note[][] = [
    [
      { note: "C", octave: 1, section: "C" },
      { note: "D", octave: 1 },
      { note: "E", octave: 1 },
      { note: "F", octave: 1 },
      { note: "G", octave: 1 },
      { note: "A", octave: 1 },
      { note: "B", octave: 1 },
      { note: "C", octave: 2 },
    ],
    [
      { note: "G", octave: 1, section: "G (um sustenido)" },
      { note: "A", octave: 1 },
      { note: "B", octave: 1 },
      { note: "C", octave: 2 },
      { note: "D", octave: 2 },
      { note: "E", octave: 2 },
      { note: "F#", octave: 2 },
      { note: "G", octave: 2 },
    ],
    [
      { note: "F", octave: 1, section: "F (um bemol)" },
      { note: "G", octave: 1 },
      { note: "A", octave: 1 },
      { note: "Bb", octave: 1 },
      { note: "C", octave: 2 },
      { note: "D", octave: 2 },
      { note: "E", octave: 2 },
      { note: "F", octave: 2 },
    ],
    [
      { note: "D", octave: 1, section: "D (dois sustenidos)" },
      { note: "E", octave: 1 },
      { note: "F#", octave: 1 },
      { note: "G", octave: 1 },
      { note: "A", octave: 1 },
      { note: "B", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "D", octave: 2 },
    ],
    [
      {
        note: "Bb", // A#
        octave: 1,
        section: "Bb (dois bemóis) / A# (sete sustenidos)",
      },
      { note: "C", octave: 2 }, // B#
      { note: "D", octave: 2 }, // C##
      { note: "Eb", octave: 2 }, // D#
      { note: "F", octave: 2 }, // E#
      { note: "G", octave: 2 }, // F##
      { note: "A", octave: 2 }, // G##
      { note: "Bb", octave: 2 }, // A#
    ],
    [
      { note: "A", octave: 1, section: "A (três sustenidos)" },
      { note: "B", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "D", octave: 2 },
      { note: "E", octave: 2 },
      { note: "F#", octave: 2 },
      { note: "G#", octave: 2 },
      { note: "A", octave: 2 },
    ],
    [
      {
        note: "Eb",
        octave: 1,
        section: "Eb (três bemóis) / D# (sete sustenidos)",
      }, // D#
      { note: "F", octave: 1 }, // E#
      { note: "G", octave: 1 }, // F##
      { note: "Ab", octave: 1 }, // G#
      { note: "Bb", octave: 1 }, // A#
      { note: "C", octave: 2 }, // B#
      { note: "D", octave: 2 }, // C##
      { note: "Eb", octave: 2 }, // D#
    ],
    [
      { note: "E", octave: 1, section: "E (quatro sustenidos)" },
      { note: "F#", octave: 1 },
      { note: "G#", octave: 1 },
      { note: "A", octave: 1 },
      { note: "B", octave: 1 },
      { note: "C#", octave: 2 },
      { note: "D#", octave: 2 },
      { note: "E", octave: 2 },
    ],
    [
      {
        note: "Ab", // G#
        octave: 1,
        section: "Ab (quatro bemóis) / G# (sete sustenidos)",
      },
      { note: "Bb", octave: 1 }, // A#
      { note: "C", octave: 2 }, // B#
      { note: "Db", octave: 2 }, // C#
      { note: "Eb", octave: 2 }, // D#
      { note: "F", octave: 2 }, // E#
      { note: "G", octave: 2 }, // F##
      { note: "Ab", octave: 2 }, // G#
    ],
    [
      { note: "B", octave: 1, section: "B (cinco sustenidos)" },
      { note: "C#", octave: 2 },
      { note: "D#", octave: 2 },
      { note: "E", octave: 2 },
      { note: "F#", octave: 2 },
      { note: "G#", octave: 2 },
      { note: "A", octave: 2 },
      { note: "B", octave: 2 },
    ],
    [
      {
        note: "Db", // C#
        octave: 1,
        section: "Db (cinco bemóis) / C# (sete sustenidos)",
      },
      { note: "Eb", octave: 1 }, // D#
      { note: "F", octave: 1 }, // E# (F)
      { note: "Gb", octave: 1 }, // F#
      { note: "Ab", octave: 1 }, // G#
      { note: "Bb", octave: 1 }, // A#
      { note: "C", octave: 2 }, // B# (C)
      { note: "Db", octave: 2 }, // C#
    ],
    [
      {
        note: "F#",
        octave: 1,
        section: "F# (seis sustenidos) / Gb (seis bemóis)",
      }, // Gb
      { note: "G#", octave: 1 }, // Ab
      { note: "A#", octave: 1 }, // Bb
      { note: "B", octave: 1 }, // Cb
      { note: "C#", octave: 2 }, // Db
      { note: "D#", octave: 2 }, // Eb
      { note: "F", octave: 2 }, // #E // F
      { note: "F#", octave: 2 }, // Gb
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
