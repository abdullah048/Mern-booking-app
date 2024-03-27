import { FooterMenuLink } from '@constants/types';
import './FooterMenuLink.scss';
import { Typography } from 'antd';

type Props = {
  items: FooterMenuLink[];
};

const FooterMenuLinkComponent = ({ items }: Props) => {
  return (
    <div className='footer__menu--links'>
      <ul>
        {items.map(({ label, link, id }) => (
          <li key={id}>
            <Typography.Link href={link}>{label}</Typography.Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuLinkComponent;
