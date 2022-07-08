import { Badge, CartImg, Container } from './CartIcon.style';
import cartImage from '../../assets/cart-icon.svg';
import { Link } from 'react-router-dom';
import commerce from '../../lib/commerce';
import { useEffect, useState } from 'react';

const CartIcon = ({ cartImgWidth }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
      console.log(cart);
    });
  }, []);

  return (
    <Link to="/mycart" style={{ marginLeft: 'auto' }}>
      <Container>
        <CartImg cartImgWidth={cartImgWidth} src={cartImage} alt="Cart Icon" />
        <Badge>{cart.total_items}</Badge>
      </Container>
    </Link>
  );
};

export default CartIcon;
