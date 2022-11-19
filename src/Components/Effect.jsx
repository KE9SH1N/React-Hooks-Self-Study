import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const addClick =()=>{
        setCount((prevCount) =>prevCount+1);
    };

    const tick =()=>{
        setDate(new Date());
    }

    useEffect(()=>{
       document.title = `Clicked ${count} times`;  
    },[count]);

    useEffect(()=>{
        console.log('starting timer');
        const interval = setInterval(tick, 1000);

        return()=>{
            console.log('component unmounted');
            clearInterval(interval);
        }
    },[]);
  return (
    <div>
        <h4>Use Effect Hook</h4>
        <hr />
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
            <button type='button' onClick={addClick}>
                Click
            </button>
        </p>
    </div>
  )
}

export default Effect