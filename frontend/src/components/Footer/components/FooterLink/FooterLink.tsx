import { FooterTopLink } from '@constants/types';
import './FooterLink.scss';
import { Typography } from 'antd';

type Props = {
  link: FooterTopLink;
};

const FooterLink = ({ link: { label, link } }: Props) => {
  return (
    <li className='footer__top--link'>
      <Typography.Link
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '13px',
          lineHeight: '1em',
          textDecoration: 'underline',
        }}
        href={link}>
        {label}
      </Typography.Link>
    </li>
  );
};

export default FooterLink;
