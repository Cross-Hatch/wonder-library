import Layout from '../../components/Layout/Layout';
import coverImg from '../../assets/cover-img.png';
import {
  CoverImg,
  Featured,
  LandingText,
  PreText,
  Section,
} from './Home.style';
import Button from '../../components/Button/Button';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProduct from '../../hooks/useProduct';
import SplashScreen from '../../components/SplashScreen/SplashScreen';

const Home = () => {
  const { loading, products } = useProduct({ limit: 3 });

  if (loading) {
    return (
      <SplashScreen/>
    );
  }

  return (
    <Layout>
      <CoverImg>
        <img src={coverImg} alt="" />
      </CoverImg>
      <Section>
        <LandingText>
          <h1>In The Volume Of The Books</h1>
          <p>
            Study to show thyself approved unto God, a workman that needeth not
            to be ashamed, rightly dividing the word of truth.
          </p>
          <Button btnName="Our Books" />
        </LandingText>
      </Section>

      <Section className='pretext-section'>
        <PreText>
          <h1>Reading Is Fun</h1>
          <p>
            Wherein face rule All seas two thing, sixth set first us gathering
            had from you're evening rule fourth him, life. Dominion, and also
            midst place tree bring created. Beginning divide shall day saying
            blessed greater called good said were you're form be give appear sea
            itself light the rule from. Land their moving midst day abundantly
            all greater in after heaven wherein of A under greater. From whales
            one don't. Fruit, fourth you'll given creepeth upon without made
            which subdue was Day fill, very. Replenish you dominion. Hath one
            which, sea cattle. Darkness from dry deep abundantly evening be.
            Fruitful.
          </p>
        </PreText>
      </Section>

      <Section className="featured-section">
        <Featured>
          <h1>Featured Books</h1>
          <div className="featured-products">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Button btnName="Go To Store" />
        </Featured>
      </Section>
    </Layout>
  );
};

export default Home;
