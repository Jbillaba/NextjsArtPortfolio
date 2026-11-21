'use client';

import React, {Children, useState} from "react";
import { useGlobal } from "@/app/context/stateContext";
import ToastShowcase from "./toasts";
import Container from 'react-bootstrap/Container';


export default function StateUI() {
  const {state, setState} = useGlobal()
  const [show, toggleShow] = useState(true);

  return (
    <Container className="p-3" >
      <Container className="p-5 bg-light rounded-3" >
        <h1>State page bootstrap showcase</h1>
      </Container>
      <h2>Toasts , whatever the fuck that means</h2>
      <ToastShowcase />
    </Container>    
  )
}
