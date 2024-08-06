import { useContext } from "react";
import { Micontexto } from "./context";

function Micomponente() {
    const { texto, setTexto } = useContext(Micontexto);
  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={() => setTexto('HOLA MUNDOOO!!!')}>
        clicki
      </button>
    </div>
  )
}

export default Micomponente
