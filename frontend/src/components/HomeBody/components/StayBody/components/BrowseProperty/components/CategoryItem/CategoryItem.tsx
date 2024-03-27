import { BrowseCategory } from '@constants/types';
import './CategoryItem.scss';
import { Typography } from 'antd';

type Props = {
  data: BrowseCategory;
};

const CategoryItem = ({ data: { img, title } }: Props) => {
  return (
    <li className='category__item'>
      <div className='category__item--container'>
        <div className='category__item--img'>
          <div className='category__item--img--container'>
            <div className='category__item--img--wrapper'>
              <picture>
                <img src={img} alt='category-img' />
              </picture>
            </div>
          </div>
        </div>
        <div className='category__item--content'>
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
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
