import { Button, Typography } from 'antd';
import './DiscoverBanner.scss';
import DiscoverBannerImg from '@assets/imgs/discover-banner-img.png';

const DiscoverBanner = () => {
  return (
    <div className='discover__banner--main'>
      <div className='discover__container'>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '-20px',
            height: '64px',
            width: '64px',
            backgroundColor: '#ffb700',
            borderRadius: '50%',
          }}
        />
        <div className='discover__banner--content'>
          <div className='discover__banner--main__content'>
            <div
              style={{
                display: 'flex',
              }}>
              <Typography.Text
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'white',
                  textAlign: 'left',
                  paddingRight: '10px',
                }}>
                Find
              </Typography.Text>
              <div className='discover__scroll--content'>
                <ul>
                  <li>
                    <Typography.Text
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        textDecorationColor: '#ffb700',
                        width: 'fit-content',
                        display: 'inline-block',
                      }}>
                      apartments
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        textDecorationColor: '#ffb700',
                        width: 'fit-content',
                        display: 'inline-block',
                      }}>
                      villas
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        textDecorationColor: '#ffb700',
                        width: 'fit-content',
                        display: 'inline-block',
                      }}>
                      aparthotels
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        textDecorationColor: '#ffb700',
                        width: 'fit-content',
                        display: 'inline-block',
                      }}>
                      holiday homes
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        textDecorationColor: '#ffb700',
                        width: 'fit-content',
                        display: 'inline-block',
                      }}>
                      cottages
                    </Typography.Text>
                  </li>
                  <li>
                    <Typography.Text
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'white',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        textDecorationColor: '#ffb700',
                        width: 'fit-content',
                        display: 'inline-block',
                      }}>
                      homes
                    </Typography.Text>
                  </li>
                </ul>
              </div>
            </div>
            <Typography.Title
              style={{
                margin: 0,
                padding: 0,
                fontSize: '24px',
                fontWeight: 700,
                color: 'white',
                textAlign: 'left',
              }}>
              for your next trip
            </Typography.Title>
          </div>
          <div className='discover__banner-btn'>
            <Button
              type='default'
              style={{
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: 'white',
                color: 'var(--blue-action-foreground-color)',
                width: '100%',
              }}>
              Discover homes
            </Button>
          </div>
        </div>
        <div className='discover__banner--img'>
          <picture>
            <img src={DiscoverBannerImg} alt='discover-banner' />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default DiscoverBanner;
