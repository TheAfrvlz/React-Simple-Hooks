import { useState } from "react";
import { useRef } from "react"


const ButtonRef = 0;
const ButtonState = 1;

function App() {

  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inputRef = useRef(null);
  const BtnRef = useRef('Encendido');

  const buttonRef = useRef({ ref: null, isOn: true });

  const Hdl_clk = () => {
    inputRef.current.focus();
  };

  const Hdl_inc = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  };
  const Hdl_inc1 = () => {
    countRef.current = countRef.current + 1;
  };

  const Hdl_Btn = () => {
    BtnRef.current.innerHTML = BtnRef.current.innerHTML === 'Encendido' ? 'Apagado' : 'Encendido';
  }

  const handleClick = () => {
    buttonRef.current.isOn = !buttonRef.current.isOn;
    console.log('Estado del botón:', buttonRef.current.isOn ? 'Encendido' : 'Apagado');
  };

  return (
    <>
      <h1> useRef use cases </h1>

      <input type="text" name="" ref={inputRef} />
      <button onClick={Hdl_clk}>Focus</button>

      <div>
        <p>Contador: {count}</p>
        <p>Contador referencia: {countRef.current}</p>

        <button onClick={Hdl_inc}>Increase both</button>
        <button onClick={Hdl_inc1}>Increase Ref</button>

        <button ref={BtnRef} onClick={Hdl_Btn}>Apagado</button>
        <button ref={(el) => (buttonRef.current.ref = el)} onClick={handleClick}>
          {buttonRef.current.isOn ? 'Encendido' : 'Apagado'}
        </button>
      </div>
    </>
  )
}

export default App