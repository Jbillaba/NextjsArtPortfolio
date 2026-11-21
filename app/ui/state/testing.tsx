'use client';

import React from "react";
import Button from 'react-bootstrap/Button'
import Lightbox from "yet-another-react-lightbox";
import SabineLogo from "../sabineLogo";


// why dont we just cut the middleMan leave the css alone, and just use yet another react lightbox ??

export default function StateUI() {
  const [show, toggleShow] = React.useState(false);

  return (
    <>
      <Button onClick={() => toggleShow(true)} > Open Lightbox </Button>
    
      <Lightbox 
        open={show}
        close={() => toggleShow(false)}
        slides={[
          { src: '/public/assets/sabineportrait.png'}
        ]}
      />
    
    </>
  );
}
