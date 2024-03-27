import { Inspiration } from '@constants/types';
import './InspirationItem.scss';
import { Typography } from 'antd';
import { Fragment } from 'react';

type Props = {
  data: Inspiration;
  index: number;
};

const InspirationItem = ({
  data: { description, title, img },
  index,
}: Props) => {
  return (
    <Fragment>
      {index === 0 ? (
        <li className='inspiration__banner'>
          <div className='inspiration__container'>
            <div
              className='inspiration__wrapper'
              style={{
                backgroundImage:
                  "url('https://cf.bstatic.com/xdata/images/xphoto/540x405/296361238.jpg?k=5781de6463951b415b04e42ff2a5d23ad6bb1c5500f15c192212667573db4331&o=')",
              }}
            />
            <div className='inspiration__gradient' />
            <div className='inspiration__content--container'>
              <Typography.Title
                level={3}
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: '28px',
                  padding: 0,
                  margin: 0,
                  marginBottom: '5px',
                }}>
                {title}
              </Typography.Title>
              <Typography.Text
                style={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  padding: 0,
                  margin: 0,
                }}>
                {description}
              </Typography.Text>
            </div>
          </div>
        </li>
      ) : (
        <li className='inspiration__item'>
          <div className='inspiration__item--container'>
            <div className='inspiration__item--img'>
              <div className='inspiration__item--img--container'>
                <div className='inspiration__item--img--wrapper'>
                  <picture>
                    <img src={img} alt='location-img' />
                  </picture>
                </div>
              </div>
            </div>
            <div className='inspiration__item--content'>
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
      )}
    </Fragment>
  );
};

export default InspirationItem;
