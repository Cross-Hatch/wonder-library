import Layout from '../../components/Layout/Layout';
import { Wrapper, Button } from './MyCart.style';
import CartItem from '../../components/CartItem/CartItem';
import useProduct from '../../hooks/useProduct';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import commerce from '../../lib/commerce';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

const MyCart = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    commerce.cart.contents().then((items) => {
      setCartItems(items);
      setLoading(false);
      console.log(items)
    });
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Layout>
      <Wrapper>
        <h2>My Shopping Cart</h2>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} product={cartItem} />
        ))}
          <Button to="/payment">Checkout</Button>
      </Wrapper>
    </Layout>
  );
};

export default MyCart;
