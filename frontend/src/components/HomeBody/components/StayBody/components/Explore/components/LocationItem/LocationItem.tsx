import { Explore } from '@constants/types';
import './LocationItem.scss';
import { Typography } from 'antd';

type Props = {
  data: Explore;
};

const LocationItem = ({ data: { description, title, img } }: Props) => {
  return (
    <li className='location__item'>
      <div className='location__item--container'>
        <div className='location__item--img'>
          <div className='location__item--img--container'>
            <div className='location__item--img--wrapper'>
              <picture>
                <img src={img} alt='location-img' />
              </picture>
            </div>
          </div>
        </div>
        <div className='location__item--content'>
          <Typography.Title
            style={{
              margin: 0,
              padding: 0,
              marginBottom: '2px',
              fontSize: '16px',
              fontWeight: 800,
              lineHeight: '24px',
            }}>
            {title}
          </Typography.Title>
          <Typography.Text
            style={{
              margin: 0,
              padding: 0,
              marginBottom: '2px',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
              color: '#595959',
            }}>
            {description}
          </Typography.Text>
        </div>
      </div>
    </li>
  );
};

export default LocationItem;
