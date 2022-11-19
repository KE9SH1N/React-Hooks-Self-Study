import React from 'react'

const ShowCount = (props) => {
    console.log(`rendering ${props.title}`)
  return (
    <div>
        <p>
            {props.title} is {props.count}
        </p>
    </div>
  )
}

export default React.memo(ShowCount);