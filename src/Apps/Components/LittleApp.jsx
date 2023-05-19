import Home from './Routes/Home'
import About from './Routes/About'
import Store from './Routes/Store'
import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom'

function Error() {
  return (
    <div className='Error'>
      <h1>Not Found 404</h1>

    </div>
  )
}

function Products() {

  const { Product } = useParams();

  return (
    <div className='Products'>
      <h1>Producto</h1>
      <nav>
        <Link to="/Products/Carro1">Carro 1</Link>
        <Link to="/Products/Carro2">Carro 2</Link>
        <Link to="/Products/Carro3">Carro 3</Link>
      </nav>
      <h2>{Product}</h2>
      <Link to={'Info'}>Informacion</Link>
      <Outlet />
    </div>
  )
}

const Info = () => {
  const { Product } = useParams();
  return (
    <div className='Info'>
      <h1>Info del {Product}</h1>
    </div>
  )
}

function LittleApp() {
  return (
    <div className='LittleApp'>
      <h1>Hello from App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Store">Store</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products/:Product" element={<Products/>}>
          <Route path="Info" element={<Info />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default LittleApp;
