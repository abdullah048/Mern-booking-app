import { Typography } from 'antd';
import './ImageGallery.scss';

type MergedArray = {
  id: string;
  flag: string;
  img: string;
  title: string;
};

type Props = {
  data: MergedArray;
};

const ImageItem = ({ data: { flag, img, title } }: Props) => {
  return (
    <li className='imageItem'>
      <div className='imageGallery__first'>
        <div className='img__container'>
          <div className='img__inner--container'>
            <div className='img__main--content--wrapper'>
              <div className='img__main--content'>
                <div className='img__main--content--container'>
                  <Typography.Title
                    style={{
                      color: 'white',
                      fontSize: '24px',
                      fontWeight: 900,
                      lineHeight: '32px',
                      flexShrink: 0,
                      pointerEvents: 'all',
                      margin: 0,
                    }}>
                    {title}
                  </Typography.Title>
                  <picture>
                    <img src={flag} alt='flag' />
                  </picture>
                </div>
              </div>
              <picture>
                <img src={img} alt='city-image' />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ImageItem;
