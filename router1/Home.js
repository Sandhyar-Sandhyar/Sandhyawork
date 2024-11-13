import React from 'react';
import cat from "./imgs/cat.png"
import cat1 from "./imgs/cat1.png"
import cat2 from "./imgs/cat2.png"
import dog1 from "./imgs/dog1.png";
import dog3 from "./imgs/dog3.png";
import dog2 from "./imgs/dog2.png";
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>this is MyWeb home page..!</p>
      
      <h3>Cat's</h3>
      <div className='cat'>
        <img src={cat} alt="cat" />
        <img src={cat1} alt="cat" />
        <img src={cat2} alt="cat" />
      </div>
     
      <h3>Dog</h3>
      <div className='dog'>
        <img src={dog1} alt='dog' />
        <img src={dog2} alt='dog' />
        <img src={dog3} alt='dog' />
      </div>

    </div>
  )
}
