'use client';

import { useState } from 'react';
import { useGlobal } from '@/app/context/stateContext'

export default function Page() {
  const [rendering, setRendering] = useState("Selected");
  const {state} = useGlobal();

    function renderFood() {
        setRendering("Food");
  };

    function renderSelected() {
        setRendering("Selected");
  };

  function renderHello() {
    setRendering(state)
    logThis()
  }

    function logThis() {
        console.log(state)
    };

    return (

        <div className="flex space-x-10">

        <button onClick={renderFood}>
            click me to render food
        </button>

        <button onClick={renderSelected}>
            clicke me to render selected
        </button>

        <button onClick={renderHello} >
          click me to see something please
        </button>

        <p>we are now rendering {rendering} </p>

        </div>

    )
}
