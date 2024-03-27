import { Typography } from 'antd';
import './RecentSearch.scss';
import Carousel from '@components/ui/Carousel/Carousel';
import { recentSearchData } from '@constants/data';
import RecentSearchItem from '../RecentSearchItem/RecentSearchItem';

const RecentSearch = () => {
  return (
    <div className='recent-search__container'>
      <div className='recent-search__heading'>
        <Typography.Title
          style={{
            fontSize: '24px',
            fontWeight: '900',
            lineHeight: '32px',
            margin: '0 0 16px 0',
          }}>
          Your recent searches
        </Typography.Title>
      </div>
      <Carousel>
        {recentSearchData.map(data => (
          <RecentSearchItem key={data.id} data={data} />
        ))}
      </Carousel>
    </div>
  );
};

export default RecentSearch;
