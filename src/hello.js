import React, { useRef,useState } from 'react';
import usePrevRef from './context/counterContext'

// export default function Hello(){
//     return (
//         <>
//         <h1 style={{color:'red'}}>Hello Guru</h1>
//         <div c>
//             <p>HI BRo</p>    
//         </div>
//         </>
//     )
// }

// import * as React from "react";

const TestComponent = (props) => {

  const myRef = useRef(0)

  const [count, setCount] = useState(0);
  const myPrevRef = usePrevRef(count)
let varableCount=0

  const myList = ['GURU', 'HIII'];

  const onClickItem = (item) => {
    console.log("Item: ", item);
  };

  const doIncrement = () => {
    setCount((pre) => {
      // myPrevRef.current = pre + 1
      return pre + 1
    })

  }
  const doIncrementVariable=()=>{
varableCount=varableCount+1;
  }

  const doIncrementRef=()=>{
    console.log("myRef.currentmyRef.currentmyRef.current",myRef.current)
    myRef.current=myRef.current+1
  }

  console.log("prev",myPrevRef,"count",count,"varableCount",varableCount)

  return (
    <div>
      {/* {myList.map((item) => (
        <div>
          <button onClick={() => onClickItem(item)}>My Button</button>
        </div>
      ))} */}
      <h1>my Ref value rendered {`${myRef?.current||0}`}</h1>
      <br/>
      <h1>my variable value rendered {`${varableCount}`}</h1>
      <br/>
      <h1>my count state value rendered {`${count}`}</h1>
      
      <button onClick={doIncrement}> state increment</button>
      <br/>
      <button onClick={doIncrementVariable}> var increment</button>
      <br/>
      <button onClick={doIncrementRef}> Ref increment</button>

    </div>
  );
};

export default TestComponent;