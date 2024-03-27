import { Typography } from 'antd';
import './UniqueProperties.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { uniquePropertiesData } from '@constants/data';
import UniquePropertyLocation from './Components/UniquePropertyLocation.tsx';

const UniqueProperties = () => {
  return (
    <div className='unique_properties__container'>
      <div className='unique_properties__heading--wrapper'>
        <Typography.Title
          style={{
            margin: 0,
            padding: 0,
            fontSize: '24px',
            fontWeight: 900,
            lineHeight: '32px',
            marginBottom: 'var(--spacing_1x)',
          }}>
          Stay at our unique properties
        </Typography.Title>
        <Typography.Text
          style={{
            margin: 0,
            padding: 0,
            marginBottom: 'var(--spacing_1x)',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            color: 'var(--description-text-color)',
          }}>
          From castles and villas to boats and igloos, we've got it all
        </Typography.Text>
      </div>
      <Carousel>
        {uniquePropertiesData.map(data => (
          <UniquePropertyLocation key={data.id} data={data} />
        ))}
      </Carousel>
    </div>
  );
};

export default UniqueProperties;
