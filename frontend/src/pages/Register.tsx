import {
  GithubOutlined,
  GoogleOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';
import StyledAntButton from '@components/ui/StyledAntButton';
import StyledAntInput from '@components/ui/StyledAntInput';
import { CreateUserDto } from '@constants/types';
import useAuthStore from '@hooks/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { Divider, Form, Typography } from 'antd';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Signup = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: CreateUserDto) => {
      return axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        data,
        { withCredentials: true }
      );
    },
    onSuccess(data) {
      toast.success('Successful');
      localStorage.setItem('user', JSON.stringify(data.data.user));
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

  const handleNavigate = useCallback(() => {
    navigate('/sign-in');
  }, [navigate]);

  const onFinish = async (values: CreateUserDto) => {
    await mutateAsync(values);
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <Fragment>
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
              padding: '20px 16px',
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
                Sign up
              </Title>
              <Text
                style={{
                  color: 'rgba(0, 0, 0, 0.65)',
                }}>
                Create a new account to get started.
              </Text>
            </div>
            <Form onFinish={onFinish}>
              <Form.Item
                name='firstName'
                rules={[
                  { required: true, message: 'Please input your firstName!' },
                ]}>
                <StyledAntInput
                  type='text'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='First Name'
                />
              </Form.Item>
              <Form.Item
                name='lastName'
                rules={[
                  { required: true, message: 'Please input your LastName!' },
                ]}>
                <StyledAntInput
                  type='text'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Last Name'
                />
              </Form.Item>
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
              <Form.Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}>
                <StyledAntInput
                  type='password'
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  placeholder='Confirm password'
                />
              </Form.Item>
              <Form.Item>
                <StyledAntButton
                  style={{
                    width: '100%',
                  }}
                  type='primary'
                  htmlType='submit'
                  loading={isPending}>
                  Sign up
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
                onClick={() =>
                  window.open(
                    `${import.meta.env.VITE_APP_URL}/auth/github`,
                    '_self'
                  )
                }
                icon={<GithubOutlined />}
                style={{
                  width: '100%',
                }}
                type='default'
                htmlType='button'>
                Sign up with Github
              </StyledAntButton>
              <StyledAntButton
                onClick={() =>
                  window.open(
                    `${import.meta.env.VITE_APP_URL}/auth/google`,
                    '_self'
                  )
                }
                icon={<GoogleOutlined />}
                style={{
                  width: '100%',
                }}
                type='default'
                htmlType='button'>
                Sign up with Google
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
                Already have an account?
              </Text>
              <StyledLink onClick={handleNavigate}>&nbsp;Sign in</StyledLink>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default Signup;

export const StyledLink = styled(Text)`
  &:hover {
    color: #40a9ff;
  }
  color: #1890ff;
  cursor: pointer;
  transition: color 0.3s;
  outline: none;
  text-decoration: none;
`;
