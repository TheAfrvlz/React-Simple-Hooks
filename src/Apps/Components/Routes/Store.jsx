import { Link } from "react-router-dom";

function Store() {
  return (
    <div className='Store'>
        <h1>Welcome to our store</h1>
        <nav>
        <Link to="/Products/Carro1">Carro 1</Link>
        <Link to="/Products/Carro2">Carro 2</Link>
        <Link to="/Products/Carro3">Carro 3</Link>
      </nav>
    </div>
  )
}

export default Store;
