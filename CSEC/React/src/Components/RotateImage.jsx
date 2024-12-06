// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
//import { use } from 'react';

const RotateImage = () => {
    const[ImageRotate,setRotate]=useState('20dg');
  return (
    <div>
    <img src="https://picsum.photos/200/300" alt="rotate image
    " style={{ color: ImageRotate }} />
    <button onClick={() => console.log('rotate image')}>Rotate Image</button>
    </div>
  )
}

export default RotateImage;
//image rotate in 4 direction and increase width and heioght
