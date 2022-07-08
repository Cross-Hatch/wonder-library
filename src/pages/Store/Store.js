import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProduct from '../../hooks/useProduct';
import {
  Featured,
  Section,
} from './Store.style'

const Store = () => {
  const {products} = useProduct({ limit: 20});

  return (
   <Layout> 
    <Section> 
      <Featured> 
        <div className="featured-products">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Featured>
    </Section>
   </Layout>
  );
};

export default Store;