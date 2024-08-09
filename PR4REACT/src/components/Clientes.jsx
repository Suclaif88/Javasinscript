import PropTypes from 'prop-types';

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    text: '¡Excelente servicio! Los productos son de alta calidad y el soporte al cliente es excepcional.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Ana Gómez',
    text: 'Estoy muy satisfecha con mi compra. La entrega fue rápida y el producto superó mis expectativas.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Carlos López',
    text: 'Una experiencia maravillosa. Recomiendo encarecidamente esta empresa a todos mis amigos y familiares.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const TestimonialCard = ({ name, text, rating, image }) => (
  <div className="testimonial-card">
    <img src={image} alt={`${name}'s picture`} className="testimonial-image" />
    <h3>{name}</h3>
    <p>{text}</p>
    <div className="rating">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  </div>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

const Clientes = () => (
  <div className="testimonial-container">
    <section className="testimonials">
      <h1>Testimonios de Clientes</h1>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            text={testimonial.text}
            rating={testimonial.rating}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  </div>
);

export default Clientes;
