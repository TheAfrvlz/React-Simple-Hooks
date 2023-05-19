import React, {useState,useEffect,useContext} from 'react'
import { LinkerContext } from './ExternalContext';

function Out() {
    const {btnTgl,Slider} = useContext(LinkerContext);

  return (
    <div className='Out'>
        <h1>Outputs</h1>
        <h1>{btnTgl ? 'On' : 'Off'}</h1>
        <h1>Slider Position: {Slider}</h1>
    </div>
  )
}

export default Out;
