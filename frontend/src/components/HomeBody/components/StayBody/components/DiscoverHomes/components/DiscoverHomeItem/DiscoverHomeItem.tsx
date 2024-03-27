import { DiscoverHomes } from '@constants/types';
import './DiscoverHomeItem.scss';
import { Typography } from 'antd';

type Props = {
  data: DiscoverHomes;
};

const DiscoverHomeItem = ({
  data: { comments, description, img, numberOfReviews, price, rating, title },
}: Props) => {
  return (
    <li className='discover__item'>
      <div className='discover__item--container'>
        <div className='discover__item--img'>
          <div className='discover__item--img--container'>
            <div className='discover__item--img--wrapper'>
              <picture>
                <img src={img} alt='location-img' />
              </picture>
            </div>
          </div>
        </div>
        <div className='discover__item--content'>
          <div className='discover__item--content--wrapper'>
            <div className='discover__content--first-div'>
              <Typography.Title
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '24px',
                }}>
                {title}
              </Typography.Title>
              <Typography.Text
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  color: 'var(--description-text-color)',
                }}>
                {description}
              </Typography.Text>
            </div>
            <div className='discover__content--second-div'>
              <div className='discover__item--rating'>
                <Typography.Text
                  style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '18px',
                  }}>
                  {rating}
                </Typography.Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Typography.Text
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '18px',
                  }}>
                  {comments}
                </Typography.Text>
                &nbsp;·&nbsp;
                <Typography.Text
                  style={{
                    color: 'var(--description-text-color)',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '18px',
                  }}>
                  {numberOfReviews.toLocaleString()} reviews
                </Typography.Text>
              </div>
            </div>
          </div>
          <div className='discover__pricing'>
            <Typography.Text
              style={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                color: 'var(--description-text-color)',
                marginTop: '4px',
              }}>
              Starting from
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '24px',
              }}>
              PKR {price.toLocaleString()}
            </Typography.Text>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DiscoverHomeItem;
