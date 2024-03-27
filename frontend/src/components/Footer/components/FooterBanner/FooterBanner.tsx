import { Button, Input, Typography } from 'antd';
import './FooterBanner.scss';

const FooterBanner = () => {
  return (
    <div className='footer__main--newsletter'>
      <form>
        <div className='footer__main--newsletter--container'>
          <div className='footer__main--newsletter--inner--container'>
            <Typography.Text
              style={{
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 300,
                textAlign: 'center',
                color: 'white',
              }}>
              Save time, save money!
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#bdbdbd',
                display: 'block',
              }}>
              Sign up and we'll send the best deals to you
            </Typography.Text>
          </div>
          <div className='footer__form'>
            <Typography.Text
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                color: 'white',
                display: 'block',
              }}>
              Enter your email address and we'll send you our best deals
            </Typography.Text>
            <div className='subscription__container'>
              <Input
                style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#6b6b6b',
                  border: 0,
                  borderRadius: 3,
                  fontWeight: 300,
                  padding: '10px',
                  width: '65%',
                }}
                placeholder='Your email address'
                type='email'
                autoCapitalize='off'
              />
              <Button
                type='primary'
                style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  boxSizing: 'border-box',
                  borderRadius: 3,
                  border: 0,
                  padding: '0 15px',
                  fontWeight: 400,
                  height: '48px',
                  color: 'white',
                  backgroundColor: 'var(--blue-action-foreground-color)',
                  boxShadow: 'none',
                  flex: 1,
                  margin: '0 5px',
                }}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FooterBanner;
