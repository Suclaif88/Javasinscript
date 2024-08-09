import { Routes, Route } from 'react-router-dom';
import Layout from './LayoutNavBar'
import Inicio from './Inicio';
import SobreNosotros from './SobreNosotros';
import Contacto from './Contacto';
import Clientes from './Clientes';

function Navbar() {
  return (
    <div className='App'>
        <Routes>
         < Route path="/" element={<Layout />} >
          <Route path="/" element={<Inicio />} />
          <Route path="SobreNosotros" element={<SobreNosotros />} />
          <Route path="Clientes" element={<Clientes />} />
          <Route path="Contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </div>
  )
}

export default Navbar