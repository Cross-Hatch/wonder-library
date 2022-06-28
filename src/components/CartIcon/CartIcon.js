import { Badge, CartImg, Container } from './CartIcon.style';
import cartImage from '../../assets/cart-icon.svg';
import { Link } from 'react-router-dom';

const CartIcon = ({ cartImgWidth }) => {
  return (
    <Link to="/mycart" style={{marginLeft: "auto"}}>
      <Container>
        <CartImg cartImgWidth={cartImgWidth} src={cartImage} alt="Cart Icon" />
        <Badge>50</Badge>
      </Container>
    </Link>
  );
};

export default CartIcon;