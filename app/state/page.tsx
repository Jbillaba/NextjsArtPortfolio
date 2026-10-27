'use client';

import { useState } from 'react';

export default function Page() {
    const [rendering, setRendering] = useState("Selected");

    function renderFood() {
        setRendering("Food");
    }

    function renderSelected() {
        setRendering("Selected");
    }


    return (
        
        <div className="flex space-x-10">

        <button onClick={renderFood}>
            click me to render food
        </button>

        <button onClick={renderSelected}>
            clicke me to render selected
        </button>

        <p>we are now rendering {rendering} </p>
        
        </div>

    )
}
