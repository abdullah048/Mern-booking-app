import {
  footerLogosList,
  footerMenuLinks,
  footerTopLinks,
} from '@constants/data';
import { Button, Typography } from 'antd';
import './Footer.scss';
import FooterLink from './components/FooterLink/FooterLink';
import FooterMenuLink from './components/FooterMenuLink/FooterMenuLink';
import FooterBanner from './components/FooterBanner/FooterBanner';

const numberOfDivs = 4;
const itemsPerDiv = Math.ceil(footerMenuLinks.length / numberOfDivs);

const generateDivs = () => {
  const divs = Array.from({ length: numberOfDivs }, (_, index) => {
    const startIndex = index * itemsPerDiv;
    const endIndex = startIndex + itemsPerDiv;
    return footerMenuLinks.slice(startIndex, endIndex);
  });

  return divs;
};

const Footer = () => {
  const divs = generateDivs();
  return (
    <div className='footer__main--container'>
      <FooterBanner />
      <div className='footer__main--footer--links'>
        <div className='footer__links--top'>
          <div className='footer__top--partners'>
            <div className='footer__partners--inner'>
              <Button
                style={{
                  padding: '0 15px',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '3px',
                }}
                type='text'>
                List your property
              </Button>
            </div>
          </div>
          <div className='footer__bottom--links'>
            <div className='footer__bottom--link--container'>
              <ul>
                {footerTopLinks.map(link => (
                  <FooterLink link={link} key={link.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__links--bottom'>
          <div className='footer__links--inner-wrapper'>
            {divs.map((items, index) => (
              <FooterMenuLink items={items} key={index} />
            ))}
          </div>
        </div>
        <div className='footer__extranet--container'>
          <div className='footer__extranet--login'>
            <Typography.Link
              style={{
                fontSize: '1em',
                margin: '0 10px',
              }}
              href='/'>
              Extranet login
            </Typography.Link>
          </div>
          <span className='footer__extranet--copyright'>
            <Typography.Text
              style={{
                fontSize: '80%',
                padding: '1em 0',
              }}>
              Copyright © 1996–2024 Booking.com™. All rights reserved.
            </Typography.Text>
          </span>
        </div>
        <div className='footer__logos'>
          <Typography.Text
            style={{
              color: '#6b6b6b',
              fontSize: '12px',
              textAlign: 'center',
              padding: '',
            }}>
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </Typography.Text>
          <div className='footer__logos--list'>
            <ul>
              {footerLogosList.map(logo => (
                <li key={logo.id}>
                  <img src={logo.img} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
