import { Typography } from 'antd';
import './Inspiration.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { inspirationBannerData } from '@constants/data';
import InspirationItem from './components/InspirationItem/InspirationItem';

const Inspiration = () => {
  return (
    <div className='inspiration__main'>
      <div className='inspiration__heading'>
        <Typography.Title
          level={2}
          style={{
            margin: 0,
            padding: 0,
            fontSize: '24px',
            fontWeight: 900,
            lineHeight: '32px',
          }}>
          Get inspiration for your next trip
        </Typography.Title>
        <Typography.Link
          style={{
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '20px',
          }}>
          More
        </Typography.Link>
      </div>
      <Carousel>
        {inspirationBannerData.map((data, index) => (
          <InspirationItem key={data.id} data={data} index={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default Inspiration;
