import "./ProductCard.css";

export const ProductCard = (props) => {
  const { product } = props;
  return (
    <div>
      {product.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
