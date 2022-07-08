import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProduct from "../../hooks/useProduct";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import { Wrapper } from "./Store.style";

const Store = () => {
  const { loading, products } = useProduct({ limit: "" });

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Layout>
      <Wrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Store;
