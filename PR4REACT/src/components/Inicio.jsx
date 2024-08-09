import { useState, useEffect } from "react";
import "../index.css";

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0); //useState para el cambio de slide
  const images = [
    "https://via.placeholder.com/1920x600/dc143c/ffffff?text=Primer+HOLA MUNDOOOO",
    "https://via.placeholder.com/1920x600/6114dc/ffffff?text=Segundo+HOLA MUNDOOOO",
    "https://via.placeholder.com/1920x600/75dc14/ffffff?text=Tercero+HOLA MUNDOOOO"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 segundos de cambio

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
