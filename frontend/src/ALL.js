import Card from './screens/Card';
import GridExample from './components/Card';
import gopro from './gopro.mp4';
import { useTranslation } from 'react-i18next';
import MyCarousel from './components/Carousel/Carousele';
import MyCarousel2 from './components/Carousel/Carousele2';


function ALL() {
  const { i18n } = useTranslation()

  return (
    <div>
      <main>
        <div className="body">
          <div className="hero">
            {' '}
            {/* Ajoutez la classe "hero" ici */}
            <video src={gopro} autoPlay loop muted />
            <div className="content">
              <h1>da'wave! club</h1>
              <p>{i18n.t('Hero1')}</p>
              <a href="./screen/SigninScreen" class="button">
                {i18n.t('Inscrire')}
              </a>
            </div>
          </div>
        </div>
        <Card />
        <MyCarousel/>
        <MyCarousel2/>
        <GridExample />
      </main>
    </div>
  );
}

export default ALL;
