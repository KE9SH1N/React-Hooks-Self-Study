import React from 'react'

const title = () => {
    console.log("rendering title component");
  return (
    <div>
        <h2>Use Callback hook Title</h2>
    </div>
  )
}

export default React.memo(title);