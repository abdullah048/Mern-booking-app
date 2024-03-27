import HeroBanner from '@components/HeroBanner/HeroBanner';
import HomeBody from '@components/HomeBody/HomeBody';
import ValidateUser from '@hooks/useValidateUser';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <ValidateUser redirectUrl='/' />
      <Helmet>
        <title>
          Booking.com | Official site | The best hotels, flights, car rentals
          &amp; accommodations
        </title>
        <meta
          name='description'
          content='Explore the world with Booking.com. Big savings on homes, hotels, flights, car rentals, taxis and attractions – build your perfect trip on any budget.'
        />
      </Helmet>
      <HeroBanner />
      <HomeBody />
    </div>
  );
};

export default Home;
