import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/SobreNosotros">Sobre Nosotros</Link>
            </li>
            <li>
                <Link to="/Clientes">Clientes</Link>
            </li>
            <li>
                <Link to="/Contacto">Contacto</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default layout
