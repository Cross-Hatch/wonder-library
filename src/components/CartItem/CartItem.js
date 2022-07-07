import { Container, Wrapper, Description } from './CartItem.style';
import { stripHtml } from 'string-strip-html';
import Button from '../Button/Button';

const CartItem = ({ product }) => {
  const description = stripHtml(product.description).result;

  return (
    <Container>
      <Wrapper>
        <img src={product.image.url} alt={product.name} />
        <Description>
          <h4>{product.name}</h4>
          <p>{description ? description : 'error'}</p>
          <Button btnName={'Remove'} />
        </Description>
      </Wrapper>
    </Container>
  );
};

export default CartItem;
