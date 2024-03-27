import { UniqueProperties } from '@constants/types';
import './UniquePropertyLocation.scss';
import { Typography } from 'antd';

type Props = {
  data: UniqueProperties;
};

const UniquePropertyLocation = ({
  data: { img, title, description, rating, numberOfReviews, comments },
}: Props) => {
  return (
    <li className='unique-property__item'>
      <div className='unique-property__item--container'>
        <div className='unique-property__item--img'>
          <div className='unique-property__item--img--container'>
            <div className='unique-property__item--img--wrapper'>
              <picture>
                <img src={img} alt='location-img' />
              </picture>
            </div>
          </div>
        </div>
        <div className='unique-property__item--content'>
          <div className='unique-property__item--content--wrapper'>
            <div className='unique-property__content--first-div'>
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
            <div className='unique-property__content--second-div'>
              <div className='unique-property__item--rating'>
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
        </div>
      </div>
    </li>
  );
};

export default UniquePropertyLocation;
