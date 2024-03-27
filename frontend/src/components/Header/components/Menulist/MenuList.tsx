import { HorizontalMenuList } from '@constants/types';
import './MenuList.scss';
import bedIcon from '@assets/svgs/bed.svg';
import planeIcon from '@assets/svgs/plane.svg';
import carIcon from '@assets/svgs/car.svg';
import attractionIcon from '@assets/svgs/attraction.svg';
import taxiIcon from '@assets/svgs/taxi.svg';
import { Typography } from 'antd';

type Props = {
  data: HorizontalMenuList;
};

const MenuList = ({ data: { icon, label } }: Props) => {
  const renderIcon = () => {
    switch (icon) {
      case 'bed':
        return <img width={20} height={20} src={bedIcon} alt='icon' />;
      case 'plane':
        return <img width={20} height={20} src={planeIcon} alt='icon' />;
      case 'car':
        return <img width={20} height={20} src={carIcon} alt='icon' />;
      case 'attraction':
        return <img width={20} height={20} src={attractionIcon} alt='icon' />;
      case 'taxi':
        return <img width={20} height={20} src={taxiIcon} alt='icon' />;
      default:
        return null;
    }
  };
  return (
    <li className='menulist'>
      <span className='menulist__inner--wrapper'>
        <span className='menulist__inner--content'>
          <span className='menulist__inner--content--icon'>{renderIcon()}</span>
          <Typography.Text
            style={{
              marginBlockStart: 'var(--spacing_2x, initial)',
              marginBlockEnd: 'initial',
              marginInlineStart: 'var(initial, initial)',
              marginInlineEnd: 'var(--spacing_2x, initial)',
              color: 'white',
              fontWeight: '500',
              lineHeight: '0px',
              whiteSpace: 'nowrap',
            }}>
            {label}
          </Typography.Text>
        </span>
      </span>
    </li>
  );
};

export default MenuList;
