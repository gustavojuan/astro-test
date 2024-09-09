import { useState } from "react"

export const ReactCounter = () => {

const [counter, setCounter] = useState(0)


const handleOnClick  = () =>  {

    console.log('asd');
    
    setCounter((c) => c + 1)
};


  return (
    <>
    <h1>React counter</h1>
        <span>{counter}</span>
        <button onClick={handleOnClick}>+1</button>
    </>
  )
}
