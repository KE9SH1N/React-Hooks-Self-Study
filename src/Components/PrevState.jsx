import React from 'react'
import { useState } from "react";

const PrevState = () => {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };
  return (
    <div>
        {count}
        <p>
              <button type='button' onClick={()=>setCount((prevState) => prevState + 1)}>
                add 1
            </button>
        </p>

        <p>
            <button type='button' onClick={addFive}>
                add 5
            </button>
        </p>
    </div>
  )
}

export default PrevState