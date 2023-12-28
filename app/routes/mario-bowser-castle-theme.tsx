import type { MetaFunction } from "@remix-run/node";
import abcjs from "abcjs";
import { useEffect } from "react";
import { Title } from "~/components/Title";

const title = "Mario - Bowser's Castle Theme";

export const meta: MetaFunction = () => {
  return [{ title: title }, { name: "description", content: title }];
};

export default function MarioCastleTheme() {
  const abc = `
T: Mario - Bowser's Castle Theme
X: 2
V:1
M: 3/4
L: 1/16
K: Eb bass
"Intro" z2 G,_D [K:treble] z2 G'_d' G''4 |: [M: 4/4] [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf]|[=Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg]|
[ca][ca][ca][ca] [ca][ca][ca][ca] [ca][ca][ca][ca] [ca][ca][ca][ca]|[=Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg]:|
[L: 1/4] [Afa]2 [Fcf] [CFc] |
V:2
K: bass
L: 1/16
G,,_D, z2 [K:treble] G_d z2 z4 |: [K:bass] [M: 4/4] [L: 1/4] [F,,F,]3 [F,,F,]|[G,,G,]4|
[F,,F,]3 [F,,F,]|[G,,G,]4:|
[F,,F,]4
`;

  useEffect(() => {
    abcjs.renderAbc("abc", abc);
  }, [abc]);

  return (
    <div className="p-2">
      <Title>{title}</Title>
      <div id="abc"></div>
      <div>
        References:{" "}
        <a
          href="https://www.youtube.com/watch?v=Bfp-cnhExnE"
          rel="noreferrer"
          target="_blank"
        >
          Video
        </a>
        <a
          href="https://musescore.com/user/32845162/scores/6182106"
          rel="noreferrer"
          target="_blank"
        >
          Musescore
        </a>
      </div>
    </div>
  );
}
