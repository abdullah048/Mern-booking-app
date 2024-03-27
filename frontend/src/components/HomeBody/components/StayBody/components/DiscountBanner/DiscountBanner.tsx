import { Button, Typography } from 'antd';
import './DiscountBanner.scss';
import globeImg from '@src/assets/imgs/genius-globe.png';

const DiscoverBanner = () => {
  return (
    <div className='discount__main'>
      <div className='discount__wrapper'>
        <div className='discount__img'>
          <div
            style={{
              paddingTop: '100%',
              position: 'relative',
            }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
              }}>
              <picture className='discount__picture'>
                <img src={globeImg} alt='genius-globe' />
              </picture>
            </div>
          </div>
        </div>
        <div className='discount__content--main'>
          <Typography.Title
            level={2}
            style={{
              margin: 0,
              padding: 0,
              fontSize: '24px',
              fontWeight: 900,
              lineHeight: '32px',
            }}>
            Get instant discounts
          </Typography.Title>
          <div
            style={{
              margin: 'var(--spacing_1x) 0 var(--spacing_4x) 0',
            }}>
            <Typography.Text
              style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
              }}>
              Simply sign into your Booking.com account and look for the blue
              Genius logo to save
            </Typography.Text>
          </div>
        </div>
        <div className='discount__buttons'>
          <Button
            type='default'
            style={{
              pointerEvents: 'all',
              color: '#006ce4',
              fontWeight: 500,
            }}>
            Sign in
          </Button>
          <Button
            type='text'
            style={{
              pointerEvents: 'all',
              color: '#006ce4',
              fontWeight: 500,
            }}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverBanner;
