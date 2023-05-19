import { useId } from "react";


function App() {

  const form_id = useId();
  return (
    <div className='App'>
      <h1>useID</h1>

      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label for={form_id +'--Name'}>Nombre:</label>
            <input type="text" id={form_id +'--Name'} />
          </li>
          <li>
            <label for={form_id +'--Mail'}>Correo electrónico:</label>
            <input type="email" id={form_id +'--Mail'} />
          </li>
          <li>
            <label for={form_id +'--msg'}>Mensaje:</label>
            <textarea id={form_id +'--msg'} name="user_message"></textarea>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default App;
