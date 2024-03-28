import { useQuery } from '@tanstack/react-query';
import { Flex, Spin } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from './useAuthStore';

type Props = {
  redirectUrl: string;
};

export default function ValidateUser({ redirectUrl }: Props) {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { isError, isPending, isSuccess, data } = useQuery({
    queryKey: ['validate-token'],
    queryFn: () => {
      return axios.get(`${import.meta.env.VITE_BASE_URL}/user/validate-token`, {
        withCredentials: true,
      });
    },
    retry: 0,
  });

  useEffect(() => {
    if (isError) return;

    if (isSuccess) {
      localStorage.setItem('user', JSON.stringify(data.data?.user));
      setUser(data.data?.user);
      navigate(redirectUrl);
    }
  }, [data, isError, isSuccess, navigate, redirectUrl, setUser]);

  if (isPending) {
    return (
      <Flex
        align='center'
        justify='center'
        style={{
          height: '100vh',
          width: '100%',
        }}>
        <Spin size='large' />
      </Flex>
    );
  }
}
