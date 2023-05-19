import React, {useState,useEffect, useContext} from 'react'
import { LinkerContext } from './ExternalContext';




function In() {

  const On_Hdlr = () =>{
    btnTglSet(true);
  };

  const Off_Hdlr = () =>{
    btnTglSet(false);
  };
  
  const SliderVal = (e) =>{
    SetSlider(e.target.value);
  };


  const {btnTglSet,Slider,SetSlider} = useContext(LinkerContext);

  return (
    <div className='In'>
        <h1>Inputs</h1>
        <button onClick={On_Hdlr}>Led On</button>
        <button onClick={Off_Hdlr}>Led Off</button>

        <input
        type="range"
        min="0"
        max="1023"
        value={Slider}
        onChange={SliderVal}
      />

    </div>
  )
}

export default In;
