import React, { useEffect, useRef } from 'react'

const Ref = () => {

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);
  return (
    <div>
        <p>
            <input ref={inputRef} type="text" placeholder='Enter something' />
        </p>
    </div>
  )
}

export default Ref