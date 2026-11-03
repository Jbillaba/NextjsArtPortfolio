'use client';

import { useQueryState } from "nuqs";

export default function StateUI() {
  const [render, setRender] = useQueryState(
    'render',
    {defaultValue: 'food'}
  )
  return (
    <>
      <div className='my-8 flex flex-wrap items-center gap-4' >
        <button onClick={() => setRender('food')} > click to set render to food </button>

        <button onClick={() => setRender('selected')} > click to set render to selected </button>

        <button onClick={() => setRender('something')} > click to set render to something </button>

        <span> System is now set to { render }</span>
      </div>
    </>
  )
}
