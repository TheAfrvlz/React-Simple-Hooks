import ChildMemoCallback from "./Components/ComponentMemoCallback"
import React, {useState,useEffect, useCallback} from 'react'
import Navigation from "./Components/ComponentMemoCallbackNav";


function App() {

  const [ct1,SetCt1] = useState(0);
  const [ct2,SetCt2] = useState(0);
  const [ct3,SetCt3] = useState(0);

  const Incby1 = useCallback( () =>{
    SetCt1(ct1+1);
  },[ct1]);

  const Incby2 =useCallback( () =>{
    SetCt2(ct2+2);
  },[ct2]);

  const Incby3 =useCallback( () =>{
    SetCt3(ct3+3);
  },[ct3]);

  return (
    <>
      <h1> useMemo & useCallback use cases </h1>
      <Navigation/>
      <ChildMemoCallback text="Contador 1" cuenta={ct1} sumar={Incby1} />
      <ChildMemoCallback text="Contador 2" cuenta={ct2} sumar={Incby2} />
      <ChildMemoCallback text="Contador 3" cuenta={ct3} sumar={Incby3} />
      
     
    </>
  )
}

export default App