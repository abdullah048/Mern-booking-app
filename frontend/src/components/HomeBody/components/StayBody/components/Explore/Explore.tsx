import { Typography } from 'antd';
import './Explore.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { exploreLocationData } from '@constants/data';
import LocationItem from './components/LocationItem/LocationItem';

const Explore = () => {
  return (
    <div className='explore__container'>
      <div className='explore__heading--container'>
        <div className='explore__heading--content'>
          <Typography.Title
            style={{
              margin: 0,
              padding: 0,
              fontSize: '24px',
              fontWeight: 900,
              lineHeight: '32px',
            }}>
            Explore Pakistan
          </Typography.Title>
          <Typography.Text
            style={{
              margin: 0,
              padding: 0,
              marginTop: '4px',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#595959',
            }}>
            These popular destinations have a lot to offer
          </Typography.Text>
        </div>
      </div>
      <Carousel>
        {exploreLocationData.map(data => (
          <LocationItem key={data.id} data={data} />
        ))}
      </Carousel>
    </div>
  );
};

export default Explore;
