import {
  GithubOutlined,
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
} from '@ant-design/icons';
import StyledAntButton from '@components/ui/StyledAntButton';
import StyledAntInput from '@components/ui/StyledAntInput';
import { LoginDto } from '@constants/types';
import { useMutation } from '@tanstack/react-query';
import { Divider, Form, Typography } from 'antd';
import axios from 'axios';
import { Fragment, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { StyledLink } from './Register';
import { AnimatePresence, motion } from 'framer-motion';
import ValidateUser from '@hooks/useValidateUser';
import useAuthStore from '@hooks/useAuthStore';

const { Title, Text } = Typography;

const Login = () => {
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: LoginDto) => {
      return axios.post(`${import.meta.env.VITE_BASE_URL}/user/sign-in`, data, {
        withCredentials: true,
      });
    },
    onSuccess(data) {
      toast.success('Login Successful');
      localStorage.setItem('user', JSON.stringify(data.data.user));
      setUser(data.data?.user);
      navigate('/');
    },
    onError(error: any) {
      const errors = error.response?.data?.errors;
      if (errors?.length > 0) {
        errors?.forEach((error: { msg: string }) => {
          toast.error(`${error.msg}`);
        });
      } else {
        toast.error(`${error.response?.data.message}`);
      }
    },
  });

  const onFinish = async (values: LoginDto) => {
    await mutateAsync(values);
  };

  const handleNavigate = useCallback(() => {
    navigate('/register');
  }, [navigate]);

  return (
    <Fragment>
      <ValidateUser redirectUrl='/' />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
          }}
          exit={{ opacity: 0 }}>
          <div
            style={{
              margin: '0px auto',
              maxWidth: '320px',
              padding: '48px 16px',
            }}>
            <div
              style={{
                marginBottom: '32px',
                textAlign: 'center',
              }}>
              <img
                style={{
                  width: '50px',
                  height: '50px',
                }}
                src='/favicon.svg'
                alt='logo'
              />
              <Title
                style={{
                  fontSize: '30px',
                  marginTop: '0.8em',
                }}>
                Sign in
              </Title>
              <Text
                style={{
                  color: 'rgba(0, 0, 0, 0.65)',
                }}>
                Welcome back! Please enter your details below to sign in.
              </Text>
            </div>
            <Form onFinish={onFinish}>
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: 'Please input your Email!' },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}>
                <StyledAntInput
                  type='text'
                  prefix={<MailOutlined className='site-form-item-icon' />}
                  placeholder='Email'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    pattern: new RegExp(
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/
                    ),
                    message:
                      'Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character',
                  },
                  {
                    max: 14,
                    message: 'Maximum length is 14 characters!',
                  },
                  {
                    min: 5,
                    message: 'Minimum length is 5 characters!',
                  },
                ]}>
                <StyledAntInput
                  type='password'
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item>
                <StyledAntButton
                  loading={isPending}
                  style={{
                    width: '100%',
                  }}
                  type='primary'
                  htmlType='submit'>
                  Sign in
                </StyledAntButton>
              </Form.Item>
            </Form>
            <Divider orientation='center' plain>
              OR
            </Divider>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
              <StyledAntButton
                icon={<GithubOutlined />}
                style={{
                  width: '100%',
                }}
                type='default'
                htmlType='button'>
                Continue with Github
              </StyledAntButton>
              <StyledAntButton
                icon={<GoogleOutlined />}
                style={{
                  width: '100%',
                }}
                type='default'
                htmlType='button'>
                Continue with Google
              </StyledAntButton>
            </div>
            <div
              style={{
                marginTop: '24px',
                textAlign: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  color: 'rgba(0, 0, 0, 0.65)',
                }}>
                Don&apos;t have an account?
              </Text>
              <StyledLink onClick={handleNavigate}>
                &nbsp;Sign up now
              </StyledLink>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default Login;
