import CartIcon from '../../../assets/CartIcon';
import commerce from '../../../lib/commerce';
import { Container } from './ProductCartIcon.style';

const ProductCartIcon = ({ color, id }) => {
 function addToCart() {
    commerce.cart.add(id, 1).then((response) => console.log(response));
    // commerce.cart.refresh().then((cart) => console.log(cart));
  }

  return (
    <Container onClick={addToCart} >
      <CartIcon color={color} />
    </Container>
  );
};

export default ProductCartIcon;
