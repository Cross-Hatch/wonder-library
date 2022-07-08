import {
  Container,
  ProductDescription,
  ProductImg,
  ProductOverlay,
} from './ProductCard.style';
import ProductCartIcon from './ProductCartIcon/ProductCartIcon';
import { stripHtml } from 'string-strip-html';

const Product = ({ product }) => {
  const description = stripHtml(product.description).result;

  return (
    <Container image={product.image?.url}>
      {/* <ProductImg src={image} /> */}
      <ProductOverlay>
        <ProductDescription>
          <h3>{product.name}</h3>
          <hr />
          {description}
        </ProductDescription>
      </ProductOverlay>
      <ProductCartIcon color={'#111'} id={product.id} />
    </Container>
  );
};

export default Product;
