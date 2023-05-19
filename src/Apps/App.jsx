
import {BrowserRouter} from 'react-router-dom';
import LittleApp from './Components/LittleApp'
function App() {

  return (
    <div className='App'>
      <h1>React Router use Cases</h1>
      <BrowserRouter>
        <LittleApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
