import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/Inicio">Inicio</Link>
            </li>
            <li>
                <Link to="/SobreNosotros">Sobre Nosotros</Link>
            </li>
            <li>
                <Link to="/Cont">Contacto</Link>
            </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default layout
