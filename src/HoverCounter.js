import React ,{useState} from 'react';

const HoverCounter = (props) => {
    // const [count , setCount] = useState(0)

    // const increment = () => {
    //     setCount(count+1)
    // }
    return (
        <>
        <h2 onMouseOver={props.increment}>Clicked {props.count} times</h2>
  </>
    )
}

export default HoverCounter;