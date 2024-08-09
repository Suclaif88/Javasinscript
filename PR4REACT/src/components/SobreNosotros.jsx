import PropTypes from 'prop-types';

const products = [
  { id: 1, name: 'Producto A', description: 'Descripción A aca un poco del a', price: '$10.000' },
  { id: 2, name: 'Producto B', description: 'Descripción B aqui del b', price: '$20.000' },
  { id: 3, name: 'Producto C', description: 'Descripción C ya se entiende no?', price: '$30.000' },
];

const ProductCard = ({ name, description, price }) => (
  <div className="product-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <span>{price}</span>
  </div>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const SobreNosotros = () => (
  <div className="container">
    <section className="about-us">
      <h1>Sobre Nosotros</h1>
      <p>
        Somos una empresa innovadora dedicada a ofrecer productos de alta calidad para mejorar tu vida. 
        Nuestro equipo trabaja incansablemente para asegurar que cada producto cumpla con los más altos estándares eso espero jajajajajajaaja
      </p>
    </section>

    <section className="products">
      <h2>Nuestros Productos</h2>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  </div>
);

export default SobreNosotros;
