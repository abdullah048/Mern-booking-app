import { RecentSearch } from '@constants/types';
import './RecentSearchItem.scss';
import { Typography } from 'antd';

type Props = {
  data: RecentSearch;
};

const RecentSearchItem = ({ data: { date, img, name } }: Props) => {
  return (
    <li className='carousel__item'>
      <div className='recent__search--card'>
        <div className='recent__search--img'>
          <img src={img} alt='city-img' />
        </div>
        <div className='recent__search--content'>
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: '800',
              lineHeight: '20px',
            }}>
            {name}
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#595959',
            }}>
            {date}
          </Typography.Title>
        </div>
      </div>
    </li>
  );
};

export default RecentSearchItem;
