import React, { Children } from 'react'

const Button = (props) => {
    console.log(`rendering button ${props.children}`)
  return (
    <div>
        <p>
            <button type='button' onClick={props.handleClick}>
                {props.children}
            </button>
        </p>
    </div>
  )
}

export default React.memo(Button);