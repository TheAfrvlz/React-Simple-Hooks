import React from "react";

function Navigation() {
  console.log('Incrementadores')
  return (
    <div className='Navigation'>
        <h1> Incrementadores</h1>
    </div>
  )
}

export default React.memo(Navigation);
