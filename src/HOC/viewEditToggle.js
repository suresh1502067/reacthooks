import React from 'react'
import withToggle from './togglehoc'

const ViewEditToggleExample = ({ toggle, onToggle }) => (
  <div>
    { toggle 
      ? <input type="text" placeholder='enter new title' />
      : <p>toggle title</p>
    }
    <button onClick={onToggle}>
      { toggle ? 'Cancel' : 'Edit' }
    </button>
  </div>
)

export default withToggle(ViewEditToggleExample)