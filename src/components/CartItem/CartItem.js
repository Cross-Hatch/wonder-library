import { Container, Wrapper, Description } from './CartItem.style';
import { stripHtml } from 'string-strip-html';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import commerce from '../../lib/commerce';

const CartItem = ({ product: cartItem }) => {
  const [productDescription, setProductDescription] = useState('');
  const description = stripHtml(productDescription).result;

  useEffect(() => {
    commerce.products.retrieve(cartItem.product_id).then((product) => {
      setProductDescription(product.description);
      console.log(product.name)
    });
  }, [cartItem.product_id]);

  return (
    <Container>
      <Wrapper>
        <img src={cartItem.image.url} alt={cartItem.name} />
        <Description>
          <h4>{cartItem.name}</h4>
          <p>{description ? description : '...'}</p>
          <Button btnName={'Remove'} />
        </Description>
      </Wrapper>
    </Container>
  );
};

export default CartItem;
