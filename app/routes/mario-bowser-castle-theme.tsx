import type { MetaFunction } from "@remix-run/node";
import abcjs from "abcjs";
import { useEffect } from "react";
import { Reference } from "~/components/Reference";
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
"Intro" z2 G,_D [K:treble] z2 G'_d' G''4 |: [M: 4/4] "Riff 1 (2x)" [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf]|[=Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg]|
[ca][ca][ca][ca] [ca][ca][ca][ca] [ca][ca][ca][ca] [ca][ca][ca][ca]|[=Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg]:|
[L: 1/4] "Riff 2" [Afa]2[Fcf][CFc] |[Dd][Fcf]3 |z [CAc][Fcf][cA'c']|[Afa]2 [GBg]2|
[L: 1/16] "Riff 1" [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf]|[=Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg]| 
[ca][ca][ca][ca] [ca][ca][ca][ca] [ca][ca][ca][ca] [ca][ca][ca][ca]|[=Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg] [Bg][Bg][Bg][Bg]|
[L: 1/4] "Riff 2" [Afa]2[Fcf][CFc] |[Dd][Fcf]3 |z [CAc][Fcf][cA'c']|[Afa]2 [GBg]2|
[L: 1/16] "Riff 3" [cf][cf][cf][cf] [cf][cf][cf][cf] [cf][cf][cf][cf] [=Acf]4 | [=Bdg]4 z8 [=Acf]4 | [=Bdg]4 z8 [=Acf]4
[=Bdg]4[cea]4[B_d_g]4 [=B=d=g]4-|[Bdg]16|"Riff 4" f4 dfd=B AFAD =B,A,F,D,| 
[L: 1/8] (3G,c,e, (3c,e,G (3e,Gc (3Gce | (3=A,c,e, (3c,e,A (3e,Ac (3Ace | (3A,c,f, (3c,f,A (3f,Ac (3Acf | (3=B,d,f, (3d,f,B (3f,Bf (3Bdf
V:2
K: bass
L: 1/16
G,,_D, z2 [K:treble] G_d z2 z4 |: [K:bass] [M: 4/4] [L: 1/4] [F,,F,]3 [F,,F,]|[G,,G,]4|
[F,,F,]3 [F,,F,]|[G,,G,]4:|
[F,,F,]3 [F,,F,]1|[G,,G,]4|[A,,A,]4| [G,,G,]4|
[F,,F,]3 [F,,F,]|[G,,G,]4|
[F,,F,]4|[G,,G,]4|
[F,,F,]3 [F,,F,]|[G,,G,]4|[A,,A,]4| [G,,G,]4|
z3 [F,F]|[G,G][F,,F,][G,,G,][F,F]|[G,G][F,,F,][G,,G,][F,,F,]|
[G,,G,][A,,A,][_G,,_G,][=G,,=G,]-|[G,,G,]4|z4
[L:1][C,,C,]|[_G,,_G,]|[F,,F,]|[G,,G,]
`;

  useEffect(() => {
    abcjs.renderAbc("abc", abc, {
      synth: {
        el: "#audio",
        options: {
          displayLoop: true,
          displayRestart: true,
          displayPlay: true,
          displayProgress: true,
          displayWarp: true,
        },
      },
    });
  }, [abc]);

  return (
    <div>
      <Title>{title}</Title>
      <div id="abc"></div>
      <div>
        <div className="font-bold">References:</div>
        <div>
          <Reference href="https://www.youtube.com/watch?v=Bfp-cnhExnE">
            Video 1
          </Reference>
        </div>
        <div>
          <Reference href="https://www.youtube.com/watch?v=y-RlmjYjpjU">
            Video 2
          </Reference>
        </div>

        <div>
          <Reference href="https://musescore.com/user/32845162/scores/6182106">
            Musescore
          </Reference>
        </div>
      </div>
    </div>
  );
}
