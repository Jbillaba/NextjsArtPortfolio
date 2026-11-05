'use client';

import { useQueryState } from "nuqs";

export default function StateUI() {
  const [render, setRender] = useQueryState("render");

  return (
    <>
      <div className='my-8 flex flex-wrap items-center gap-4' >
        <button value={3} onClick={() => setRender('food')} > click to set render to food </button>

        <button value={4} onClick={() => setRender('selected')} > click to set render to selected </button>

        <button value={5} onClick={() => setRender('something')} > click to set render to something </button>

        <span> System is now set to { render }</span>
      </div>
    </>
  )
}
