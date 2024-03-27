import { useQuery } from '@tanstack/react-query';
import { Flex, Spin } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  redirectUrl: string;
};

export default function ValidateUser({ redirectUrl }: Props) {
  const navigate = useNavigate();
  const { isError, isPending, isSuccess } = useQuery({
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
      navigate(redirectUrl);
    }
  }, [isError, isSuccess, navigate, redirectUrl]);

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
