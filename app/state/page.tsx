'use client';

import { useQueryState } from 'nuqs'
//
// export default function Page() {
//   const [counter, setCounter] = useQueryState(
//     'counter',
//     parseAsInteger.withDefault(0)
//   )
//   return (
//     <>
//       <div className="my-8 flex flex-wrap items-center gap-4">
//         <button onClick={() => setCounter(x => x - 1 )} > decrease count </button>
//
//         <button onClick={() => setCounter(x => x + 1 )} > increase count </button>
//
//         <button onClick={() => setCounter(null)} > reset count </button>
//
//         <span className="text-2xl font-semibold tabular-nums" > Counter: {counter} </span>
//       </div>
//     </>
//   )
// }


export default function Page() {
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
