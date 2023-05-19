import React from "react";

function ChildMemoCallback({text,cuenta,sumar}) {
    console.log(`${text} Renderizado`);

  return (
    <div className='ChildMemoCallback'>
        <p>{text}</p>
        <p>{cuenta}</p>
        <button onClick={sumar}>+1</button>
    </div>
  )
}

export default React.memo(ChildMemoCallback);
