import Layout from '../../components/Layout/Layout';
import { Wrapper } from './MyCart.style';
import CartItem from '../../components/CartItem/CartItem';
import useProduct from '../../hooks/useProduct';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const MyCart = () => {
  const { loading, products } = useProduct({ limit: 3 });

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Layout>
      <Wrapper>
        <h2>My Shopping Cart</h2>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default MyCart;
