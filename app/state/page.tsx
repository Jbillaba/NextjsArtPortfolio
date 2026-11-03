'use client';

import { parseAsInteger, useQueryState } from 'nuqs';

export default function Page() {
  const [counter, setCounter] = useQueryState(
    'counter',
    parseAsInteger.withDefault(0)
  )

  return (
    <>
      <div className='my-8 flex flex-wrap items-center gap-4' >
        <button onClick={() => setCounter(x => x - 1)} > click me to decrease</button>

        <button onClick={() => setCounter(x => x + 1)} > click me to increase</button>

        <button onClick={() => setCounter(null)} > click me to reset count</button>

        <span className='text-2xl font-semibold tabulartabular-nums' > Counter: {counter}</span>

      </div>
    </>
  )
}
