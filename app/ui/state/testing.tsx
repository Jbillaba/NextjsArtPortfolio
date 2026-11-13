'use client';

import { useGlobal } from "@/app/context/stateContext";

export default function StateUI() {
  const {state, setState} = useGlobal()

  return (
    <>
      <p>the state of global is {state}</p>

      <div className='my-8 flex flex-wrap items-center gap-4' >
        <button value={3} onClick={() => setState('food')} > click to set render to food </button>

        <button value={4} onClick={() => setState('selected')} > click to set render to selected </button>

        <button value={5} onClick={() => setState('something')} > click to set render to something </button>

      </div>
    </>
  )
}
