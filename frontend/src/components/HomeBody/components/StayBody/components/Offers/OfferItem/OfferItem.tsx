import { OfferBanner } from '@constants/types';
import './OfferItem.scss';
import { Button, Typography } from 'antd';

type Props = {
  data: OfferBanner;
  index: number;
};

const OfferItem = ({
  data: { btnText, description, title, img },
  index,
}: Props) => {
  const isEven = index % 2 === 0;
  return (
    <li className='offer__item'>
      {!isEven ? (
        <div className='offer__banner--container--odd'>
          <div className='offer__banner--inner--odd'>
            <div className='offer__banner--content--odd'>
              <div className='offer__banner--content--wrapper--odd'>
                <Typography.Title
                  style={{
                    color: 'black',
                    margin: 0,
                    marginBottom: '4px',
                    fontSize: '20px',
                    fontWeight: '900',
                    lineHeight: '28px',
                  }}>
                  {title}
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: 'black',
                    margin: 0,
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                  }}>
                  {description}
                </Typography.Text>
                <div className='offer__btn--container'>
                  <Button
                    type='primary'
                    style={{
                      color: 'white',
                      textAlign: 'start',
                      padding: '4px 12px',
                      minHeight: 'calc(var(--spacing_1x) * 9)',
                      minWidth: 'calc(var(--spacing_1x) * 9)',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                    }}>
                    {btnText}
                  </Button>
                </div>
              </div>
            </div>
            <div className='offer__banner--img--container--odd'>
              <picture>
                <img src={img} alt='banner-side-img' />
              </picture>
            </div>
          </div>
        </div>
      ) : (
        <div className='offer__banner--container'>
          <div className='offer__banner--content'>
            <div className='offer__banner--content--wrapper'>
              <Typography.Title
                style={{
                  color: '#f5f5f5',
                  margin: 0,
                  marginBottom: '4px',
                  fontSize: '20px',
                  fontWeight: '900',
                  lineHeight: '28px',
                }}>
                {title}
              </Typography.Title>
              <Typography.Text
                style={{
                  color: '#f5f5f5',
                  margin: 0,
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '20px',
                }}>
                {description}
              </Typography.Text>
              <div className='offer__btn--container'>
                <Button
                  type='primary'
                  style={{
                    color: 'white',
                    textAlign: 'start',
                    padding: '4px 12px',
                    minHeight: 'calc(var(--spacing_1x) * 9)',
                    minWidth: 'calc(var(--spacing_1x) * 9)',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                  }}>
                  {btnText}
                </Button>
              </div>
            </div>
          </div>
          <div className='offer__banner--img'>
            <picture>
              <img src={img} alt='banner-img' />
            </picture>
          </div>
        </div>
      )}
    </li>
  );
};

export default OfferItem;
