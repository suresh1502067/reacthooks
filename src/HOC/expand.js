import React from 'react';

import ToggleSwitch from './togglehoc';

const arr=['mango','graps','apple']

function Exp({toggle,onToggle}) {
  return (
    <div>
        <div onClick={onToggle} > List Expand</div>
       { toggle?<div>
            {
                arr.map((d)=>{
                    return <h1>{d}</h1>
                })
            }
        </div>:null}
    </div>
  )
}

const ExpComp=ToggleSwitch(Exp)
export default ExpComp