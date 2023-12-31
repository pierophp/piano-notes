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
    <div className="flex relative pt-4">
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
  index?: number;
  section?: string;
  obs?: string;
};

type NoteCalculated = Note & { index: number; topIndex: number };

type NoteLabelProps = NoteCalculated & { index: number };

const notesLeft = {
  C: 10,
  "C#": 28,
  D: 46,
  "D#": 50,
  E: 88,
  F: 128,
  "F#": 149,
  G: 167,
  "G#": 189,
  A: 207,
  "A#": 228,
  B: 248,
};

function NoteLabel({ note, topIndex, octave, index, obs }: NoteLabelProps) {
  const left = notesLeft[note] + (octave - 1) * 280;
  const calculatedTop = (note.includes("#") ? 20 : 181) + topIndex * 26;
  const bgs = [
    "bg-amber-300",
    "bg-orange-400",
    "bg-sky-400",
    "bg-violet-400",
    "bg-green-500",
    "bg-red-400",
    "bg-blue-400",
    "bg-lime-400",
    "bg-fuchsia-400",
    "bg-rose-400",
  ];

  const bgIndex = (index - 1) % bgs.length;
  const bg = bgs[bgIndex];
  let className =
    "w-6 h-6 bg-amber-300 flex items-center justify-center radius-full absolute ";

  className += `${bg} `;

  return (
    <>
      <div className={className} style={{ left, top: calculatedTop }}>
        {index}
      </div>

      {obs && (
        <div className="absolute text-lg w-40" style={{ left, top: -8 }}>
          {obs}
        </div>
      )}
    </>
  );
}

function addTopToNotes(notes: Note[]): NoteCalculated[] {
  const notesUsed: { [noteKey: string]: number } = {};
  let index = 0;
  return notes.map((note) => {
    index++;
    const noteKey = `${note.note}${note.octave}`;
    if (notesUsed[noteKey] === undefined) {
      notesUsed[noteKey] = 0;
    }

    notesUsed[noteKey] += 1;

    if (note.index !== undefined) {
      index = note.index;
    }

    return { ...note, topIndex: notesUsed[noteKey] - 1, index };
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
    <>
      {notes[0].section && (
        <h2 className="text-xl font-bold w-full">{notes[0].section}</h2>
      )}
      <div className="relative">
        <div className="flex">
          {octaves.map((octave, index) => (
            <Octave key={index} />
          ))}

          {notesWithTop.map((note, index) => (
            <NoteLabel key={`${index}_${note.note}`} {...note} />
          ))}
        </div>
      </div>
    </>
  );
}
