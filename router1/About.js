import React from 'react';
import cat from "./imgs/cat.png";
import dog3 from "./imgs/dog3.png";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <h4> About cat</h4>
      <img src={cat} alt="cat" />
<p>The cat, also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around</p>

<h4> About Dog</h4>
      <img src={dog3} alt="cat" />
<p>The cat, also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around</p>
    </div>
  )
}
