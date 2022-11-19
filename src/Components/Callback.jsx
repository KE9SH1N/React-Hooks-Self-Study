import React, { useCallback, useMemo, useState } from 'react'
import Title from './subComponents/Title'
import ShowCount from './subComponents/ShowCount'
import Button from './subComponents/Button'

const Callback = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    },[]);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    },[]);


    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1;
        return (count1 % 2 == 0);
    }, [count1]);

  return (
    <div>
        <h4>Use Callback hook</h4>
        <hr />

        <Title/>
        <ShowCount count={count1} title="Counter 1" />
        <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
        <Button handleClick={incrementByOne}> Increament by one</Button>
        <ShowCount count={count2} title="Counter 2"/>
        <Button handleClick={incrementByFive}> Increament by five</Button>

    </div>
  )
}

export default Callback