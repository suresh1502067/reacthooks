import React ,{useState} from 'react';

const ClickCounter = (props) => {
    // const [count , setCount] = useState(0)

    // const increment = () => {
    //     setCount(count+1)
    // }
    return (
        <>
        <button onClick={props.increment}>Clicked {props.count} times</button>
        </>
    )
}

export default ClickCounter;