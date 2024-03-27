import { Typography } from 'antd';
import './DiscoverHomes.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { discoverHomesData } from '@constants/data';
import DiscoverHomeItem from './components/DiscoverHomeItem/DiscoverHomeItem';

const DiscoverHomes = () => {
  return (
    <div className='discover__main'>
      <div className='discover__heading'>
        <Typography.Title
          style={{
            margin: 0,
            padding: 0,
            fontSize: '24px',
            fontWeight: 900,
            lineHeight: '32px',
          }}>
          Home guests love
        </Typography.Title>
        <Typography.Link
          style={{
            margin: 0,
            padding: 0,
            fontWeight: 600,
          }}>
          Discover homes
        </Typography.Link>
      </div>
      <Carousel>
        {discoverHomesData.map(data => (
          <DiscoverHomeItem key={data.id} data={data} />
        ))}
      </Carousel>
    </div>
  );
};

export default DiscoverHomes;
