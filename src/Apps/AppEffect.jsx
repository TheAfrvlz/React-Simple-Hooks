import { useEffect, useState } from "react"

function App() {

  const [ct1, Setct1] = useState(0);
  const [ct2, Setct2] = useState(0);
  const [ct3, Setct3] = useState(0);
  const [StadoBtn,SetStadoBtn] = useState(true);
  const [IntervalCtr,SetIntervalCtr] = useState(0);
  const [initialInterval, setInitialInterval] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Montaje');
    
    const interval = setInterval(()=>{
      SetIntervalCtr(IntervalCtr +1);
    },1000);

    return ()=> clearInterval(interval);
  }, []);


  useEffect(() => {
    let interval;
    if (!initialInterval) {
      interval = setInterval(() => {
        setCount(count => {
          if (count === 10) {
            setInitialInterval(true);
            clearInterval(interval);
          }
          return count + 1;

        });
        console.log(count)

      }, 1000);
    }
    return () => clearInterval(interval);
  }, [initialInterval]);


  useEffect(() => {
    console.log('App Render');
  }, [ct1, ct2, ct3]);


  function handleButtonClick_On() {
    setInitialInterval(false);
  }

  function handleButtonClick_Off() {
    setInitialInterval(true);
  }

  function handleButtonClick_Reset() {
    setCount(0);
  }

  return (
    <>
      <h1> UseEffect use Case </h1>
      <button onClick={() => Setct1(ct1 + 1)}>btn 1</button>
      <button onClick={() => Setct2(ct2 + 1)}>btn 2</button>
      <button onClick={() => Setct3(ct3 + 1)}>btn 3</button>
      <button onClick={() => {
            SetStadoBtn(!StadoBtn);
      }}>{StadoBtn ? 'Encendido' : 'Apagado'}</button>

            <button onClick={handleButtonClick_Off}>Timer Off</button>
            <button onClick={handleButtonClick_On}>Timer On</button>
            <button onClick={handleButtonClick_Reset}>Reset</button>

            <h1> Cuenta {count} </h1>


    </>
  )
}

export default App