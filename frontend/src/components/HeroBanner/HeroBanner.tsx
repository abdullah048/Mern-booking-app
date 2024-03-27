import { Typography } from 'antd';
import './HeroBanner.scss';
import Search from './components/Search/Search';

const HeroBanner = () => {
  return (
    <div className='banner__main--container'>
      <div className='banner__inner--wrapper'>
        <div className='banner__top'>
          <div className='banner__top--heading'>
            <Typography.Title
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '62px',
                color: 'white',
                margin: '0 0 var(--spacing_1x) 0',
              }}>
              Find your next stay
            </Typography.Title>
            <Typography.Text
              style={{
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: '32px',
                color: 'white',
              }}>
              Search low prices on hotels, homes and much more...
            </Typography.Text>
          </div>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default HeroBanner;
