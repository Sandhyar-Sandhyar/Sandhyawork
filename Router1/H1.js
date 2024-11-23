import React from 'react'

// import w2 from "./imge/w2.png";
import m1 from "./imge/m1.png";
import m2 from "./imge/m2.png";
// import b from "./imge/b.png";
// import b1 from "./imge/b1.png";
import w3 from "./imge/w2.png";

export default function H1() {
  return (
    <div className='main'>
      <h2 className='ha1'>Home</h2>
      <p>Welcom to Home page </p>
      <div className='section'>

        <div className='section1'>

          <div><img src={w3} alt='d1' />
            <p>frock with white color</p></div>
          <div><img src={m2}  alt='d1' />
            <p>Boys jeans pants</p></div>
          <div><img src={w3}  alt='d1'/>
            <p>Boys jeans pants</p></div>
          <div><img src={m1}  alt='d1'/>
            <p>frock with white color</p></div>
        </div>

        <div className='section2'>

          <div><img src={w3}  alt='d1'/>
            <p>frock with white color</p></div>
          <div><img src={m2}  alt='d1'/>
            <p>Boys jeans pants</p></div>
          <div><img src={w3}  alt='d1'/>
            <p>Boys jeans pants</p></div>
          <div><img src={m1} alt='d1' />
            <p>frock with white color</p></div>
        </div>


      </div>

    </div>
  )
}
