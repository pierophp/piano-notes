function WhiteKey() {
  return <div className="border-solid w-10 h-56 border-2"></div>;
}

function BlackKey({ left = 0 }: { left: number }) {
  return (
    <div
      className="border-solid w-8 h-40 border-2 bg-black absolute"
      style={{ left }}
    ></div>
  );
}

function Octave() {
  return (
    <div className="flex relative">
      <WhiteKey />
      <BlackKey left={24} />
      <WhiteKey />
      <BlackKey left={64} />
      <WhiteKey />
      <WhiteKey />
      <BlackKey left={145} />
      <WhiteKey />
      <BlackKey left={185} />
      <WhiteKey />
      <BlackKey left={225} />
      <WhiteKey />
    </div>
  );
}

export type Note = {
  note:
    | "C"
    | "C#"
    | "D"
    | "D#"
    | "E"
    | "F"
    | "F#"
    | "G"
    | "G#"
    | "A"
    | "A#"
    | "B";
  octave: number;
};

type NoteWithTop = Note & { top: number };

type NoteLabelProps = NoteWithTop & { index: number };

const notesLeft = {
  C: 10,
  "C#": 22,
  D: 20,
  "D#": 15,
  E: 86,
  F: 40,
  "F#": 145,
  G: 50,
  "G#": 186,
  A: 60,
  "A#": 15,
  B: 244,
};

function NoteLabel({ note, top, octave, index }: NoteLabelProps) {
  const left = notesLeft[note] + (octave - 1) * 280;
  const calculatedTop = (note.includes("#") ? 0 : 160) + top * 40;
  const bgs = ["bg-amber-300", "bg-orange-400", "bg-sky-400", "bg-violet-400"];

  const bgIndex = index % bgs.length;
  const bg = bgs[bgIndex];
  let className =
    "w-8 h-8 bg-amber-300 flex items-center justify-center radius-full absolute ";

  className += `${bg} `;

  return (
    <div className={className} style={{ left, top: calculatedTop }}>
      {index + 1}
    </div>
  );
}

function addTopToNotes(notes: Note[]): NoteWithTop[] {
  const notesUsed: { [noteKey: string]: number } = {};

  return notes.map((note) => {
    const noteKey = `${note.note}${note.octave}`;
    if (notesUsed[noteKey] === undefined) {
      notesUsed[noteKey] = 0;
    }

    notesUsed[noteKey] += 1;

    return { ...note, top: notesUsed[noteKey] - 1 };
  });
}

function getOctaves(notes: Note[]): number[] {
  const octaves: { [octave: string]: boolean } = {};
  for (const note of notes) {
    octaves[note.octave.toString()] = true;
  }

  const octavesNumber = Object.keys(octaves).map((octave) =>
    parseInt(octave, 10)
  );

  const min = Math.min(...octavesNumber);
  const max = Math.max(...octavesNumber);

  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  return arrayRange(min, max, 1);
}

export function Keyboard({ notes }: { notes: Note[] }) {
  const notesWithTop = addTopToNotes(notes);
  const octaves = getOctaves(notes);

  return (
    <div className="relative">
      <div className="flex">
        {octaves.map((octave, index) => (
          <Octave key={index} />
        ))}

        {notesWithTop.map((note, index) => (
          <NoteLabel key={index} index={index} {...note} />
        ))}
      </div>
    </div>
  );
}
