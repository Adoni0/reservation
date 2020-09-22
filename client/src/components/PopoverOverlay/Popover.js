import React from 'react'

export default function Popover(props) {
    return (
        <div
        style={{display: props.showPop, width: '50px', height: '50px', 
        backgroundColor: 'red', zIndex: '99', position: 'absolute', top: '60'}} className='containPopshow'
      >
        Hello World!
      </div>
    
    )
}
