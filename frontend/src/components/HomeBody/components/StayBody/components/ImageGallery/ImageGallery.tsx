import { Typography } from 'antd';
import './ImageGallery.scss';
import { imageGalleryData } from '@constants/data';
import { Fragment, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Carousel from '@components/ui/Carousel/Carousel';
import ImageItem from './ImageItem';

type MergedArray = {
  id: string;
  flag: string;
  img: string;
  title: string;
};

const ImageGallery = () => {
  const [mergedArray, setMergedArray] = useState<MergedArray[]>([]);

  useMemo(() => {
    let array: any = [];
    imageGalleryData.forEach(item => {
      array = [...item.first, ...item.second];
    });
    setMergedArray(array);
  }, []);

  const media600 = useMediaQuery({
    query: '(max-width:600px)',
  });

  return (
    <div>
      <div className='imageGallery__heading--container'>
        <Typography.Title
          style={{
            margin: 0,
            padding: 0,
            fontSize: '24px',
            fontWeight: 900,
            lineHeight: '32px',
            marginBottom: '4px',
          }}>
          Trending destinations
        </Typography.Title>
        <Typography.Text
          style={{
            margin: 0,
            padding: 0,
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            color: '#595959',
          }}>
          Most popular choices for travelers from Pakistan
        </Typography.Text>
      </div>
      <Fragment>
        {!media600 ? (
          <Fragment>
            {imageGalleryData.map(galleryData => (
              <Fragment key={galleryData.id}>
                <div key={galleryData.id} className='imageGallery__first'>
                  {galleryData.first.map(data => (
                    <div key={data.id} className='img__container'>
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
                                {data.title}
                              </Typography.Title>
                              <picture>
                                <img src={data.flag} alt='flag' />
                              </picture>
                            </div>
                          </div>
                          <picture>
                            <img src={data.img} alt='city-image' />
                          </picture>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='imageGallery__second'>
                  {galleryData.second.map(data => (
                    <div key={data.id} className='img__container--second'>
                      <div className='img__inner--container--second'>
                        <div className='img__main--content--wrapper--second'>
                          <div className='img__main--content--second'>
                            <div className='img__main--content--container--second'>
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
                                {data.title}
                              </Typography.Title>
                              <picture>
                                <img src={data.flag} alt='flag' />
                              </picture>
                            </div>
                          </div>
                          <picture>
                            <img src={data.img} alt='city-image' />
                          </picture>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Fragment>
            ))}
          </Fragment>
        ) : (
          <Carousel>
            {mergedArray.map(item => (
              <ImageItem key={item.id} data={item} />
            ))}
          </Carousel>
        )}
      </Fragment>
    </div>
  );
};

export default ImageGallery;
