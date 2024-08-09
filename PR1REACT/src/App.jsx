import './index.css';
// import Contador from './components/Contador';
// import Carrusel from './components/Carrusel';
// import Comp from './components/Comp';
// import Navbar from './components/Navbar';
// import { Micontexto } from './components/context';
// import Micomponente from './components/Micomponente';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout'
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import Cont from './components/Cont';

const App = () => {

  // const [texto, setTexto] = useState("");
  return (
    <>
      {/* <Navbar />
      <Comp /> */}

      <div className='App'>
        <Routes>
         < Route path="/" element={<Layout />} >
          <Route path="Inicio" element={<Inicio />} />
          <Route path="SobreNosotros" element={<SobreNosotros />} />
          <Route path="Cont" element={<Cont />} />
          </Route>
        </Routes>
      </div>

        {/* <Micontexto.Provider value={{texto, setTexto}}>
          <Micomponente />
        </Micontexto.Provider> */}
    </>
  );
};

export default App;