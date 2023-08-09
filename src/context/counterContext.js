

import React,{useRef,useEffect} from 'react';


export default function usePre(count=0) {
const myPrevRef= useRef()

    useEffect(()=>{
        myPrevRef.current= count
    },[count])

  return myPrevRef
}
