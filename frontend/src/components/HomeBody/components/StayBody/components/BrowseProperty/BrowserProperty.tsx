import { Typography } from 'antd';
import './BrowseProperty.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { browseByCategoryData } from '@constants/data';
import CategoryItem from './components/CategoryItem/CategoryItem';

const BrowserProperty = () => {
  return (
    <div className='browse__property'>
      <div className='heading__wrapper'>
        <div className='browse__heading--content'>
          <Typography.Title
            style={{
              fontSize: '24px',
              fontWeight: 900,
              lineHeight: '32px',
            }}>
            Browse by property type
          </Typography.Title>
        </div>
      </div>
      <Carousel>
        {browseByCategoryData.map(data => (
          <CategoryItem key={data.id} data={data} />
        ))}
      </Carousel>
    </div>
  );
};

export default BrowserProperty;
