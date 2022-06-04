import CartIcon from '../../../assets/CartIcon';
import { Container } from './ProductCartIcon.style';

const ProductCartIcon = ({ color }) => {
  return (
    <Container>
      <CartIcon color={color} />
    </Container>
  );
};

export default ProductCartIcon;
