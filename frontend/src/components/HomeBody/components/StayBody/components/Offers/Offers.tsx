import { Typography } from 'antd';
import './Offers.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { offersData } from '@constants/data';
import OfferItem from './OfferItem/OfferItem';

const Offers = () => {
  return (
    <div className='offers__container'>
      <div className='offers__banner--container'>
        <div className='offers__banner--heading'>
          <Typography.Title
            style={{
              margin: 0,
              padding: 0,
              fontSize: '24px',
              fontWeight: 900,
              lineHeight: '32px',
            }}>
            Offers
          </Typography.Title>
          <Typography.Text
            style={{
              marginTop: 'var(--spacing_1x)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#595959',
            }}>
            Promotions, deals and special offers for you
          </Typography.Text>
        </div>
        <Carousel>
          {offersData.map((offer, index) => (
            <OfferItem key={offer.id} data={offer} index={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Offers;
