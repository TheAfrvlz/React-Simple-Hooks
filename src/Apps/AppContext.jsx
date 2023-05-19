import React, { createContext, useContext, useState } from 'react'
import { LinkerContext } from './Components/ContextComponents/ExternalContext'
import In from './Components/ContextComponents/Inputs'
import Out from './Components/ContextComponents/Outputs'


import './AppContext.css'

const ThemeContext = createContext(null);

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}


function App() {
  const [theme, setTheme] = useState('light');
  const [btnTgl,btnTglSet] = useState(true);
  const [Slider,SetSlider] = useState(0);



  return (
    <div className='AppContext'>
      <h1>useContext & createContext use Cases</h1>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
        </label>
      </ThemeContext.Provider>
      <LinkerContext.Provider value={{btnTgl,btnTglSet,Slider,SetSlider}}>
            <In/>
            <Out/>
      </LinkerContext.Provider>
    </div>
  )
}

export default App;
