import './index.css';
import Boton from './components/Boton';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className='container'>
      <h1>HOLA MUNDO</h1>
      <Boton />
      <br></br>
      <br></br>
      <Gallery />
      <Gallery />
      <Gallery />
    </div>
  );
};

export default App;
