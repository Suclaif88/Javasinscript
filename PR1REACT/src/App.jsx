import './index.css';
// import Contador from './components/Contador';
// import Carrusel from './components/Carrusel';
import Comp from './components/Comp';
import Navbar from './components/Navbar';
import { Micontexto } from './components/context';
import Micomponente from './components/Micomponente';
import { useState } from 'react';

const App = () => {

  const [texto, setTexto] = useState("");
  return (
    <>
      <Navbar />
      <Comp />

      <Micontexto.Provider value={{texto, setTexto}}>
        <Micomponente />
      </Micontexto.Provider>
    </>
  );
};

export default App;