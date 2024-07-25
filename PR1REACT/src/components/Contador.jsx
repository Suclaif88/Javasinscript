import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  
  const resta = () => {
    setCount(count - 1);
  };
  

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={resta}>Decrementar</button>
        <button onClick={resetCount}>Resetear</button>
        <button onClick={add}>Incrementar</button>
      </div>      
    </>
  );
}

export default Contador;