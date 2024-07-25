import { useState } from 'react';
function Carrusel() {

    const [count, setCount] = useState(0);

    const add = () => {
      setCount((count + 1) % objects.length);
    };
    
    const resta = () => {
      setCount((count - 1 + objects.length) % objects.length);
    };
    
  
    const resetCount = () => {
      setCount(0);
    };
  
    const objects = [
      {
        titulo: 'Título 1',
        imagen: 'https://via.placeholder.com/150/0000FF/808080?Text=Digital.com',
        parrafo: "HOLA SOY EL 1"
      },
      {
        titulo: 'Título 2',
        imagen: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com',
        parrafo: "HOLA SOY EL 2"
      },
      {
        titulo: 'Título 3',
        imagen: 'https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com',
        parrafo: "HOLA SOY EL 3"
      },
      {
        titulo: 'Título 4',
        imagen: 'https://via.placeholder.com/150/00FF00/000000?Text=SEO.com',
        parrafo: "HOLA SOY EL 4"
      },
      {
        titulo: 'Título 5',
        imagen: 'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Dummy.com',
        parrafo: "HOLA SOY EL 5"
      },
      {
        titulo: 'Título 6',
        imagen: 'https://via.placeholder.com/150/FF00FF/FFFFFF?Text=Example.com',
        parrafo: "HOLA SOY EL 6"
      },
      {
        titulo: 'Título 7',
        imagen: 'https://via.placeholder.com/150/00FFFF/000000?Text=Placeholder.com',
        parrafo: "HOLA SOY EL 7"
      },
      {
        titulo: 'Título 8',
        imagen: 'https://via.placeholder.com/150/FF4500/FFFFFF?Text=Images.com',
        parrafo: "HOLA SOY EL 8"
      },
      {
        titulo: 'Título 9',
        imagen: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?Text=Colors.com',
        parrafo: "HOLA SOY EL 9"
      },
      {
        titulo: 'Título 10',
        imagen: 'https://via.placeholder.com/150/FF69B4/FFFFFF?Text=Pink.com',
        parrafo: "HOLA SOY EL 10"
      }
    ];
  return (
      <>
      <div className="carousel">
        <h2>{objects[count].titulo}</h2>
        <img src={objects[count].imagen} alt={objects[count].titulo} />
        <p>{objects[count].parrafo}</p>
      </div>
      <div className="botones">
        <button onClick={resta}>Decrementar</button>
        <button onClick={resetCount}>Resetear</button>
        <button onClick={add}>Incrementar</button>
        
      </div>
    </>
  )
}

export default Carrusel
