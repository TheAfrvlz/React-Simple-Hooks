import { useState } from "react"

function App() {

  const [Estado,SetEstado] = useState(0);


  const handleClick = (state) =>{
    if(state === true){
      SetEstado(Estado + 1);
    }
    else{
      SetEstado(Estado - 1);
    }
    console.log(`Contador ${Estado}`)

  }

  return (
    <>   
      <h1> UseState use Cases</h1>
      <button onClick={()=>handleClick(true)}>Increase</button>
      <button onClick={()=>handleClick(false)}>decrease</button>
    </>
  )
}

export default App
