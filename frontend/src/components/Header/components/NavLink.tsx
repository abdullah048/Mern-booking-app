import {
  MenuOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import useAuthStore from '@hooks/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { Button, Tooltip } from 'antd';
import axios from 'axios';
import { HeaderNavLinks } from 'constants/types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type Props = {
  data: HeaderNavLinks;
};

const NavLink = ({ data: { label, type, tooltip, route } }: Props) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: () => {
      return axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/sign-out`,
        {},
        { withCredentials: true }
      );
    },
    onError(error: any) {
      toast.error(`${error?.response?.data?.message}`);
    },
    onSuccess(data) {
      toast.success(`${data.data?.message}`);
      localStorage.removeItem('user');
      setUser(null);
      navigate('/sign-in');
    },
  });

  const handleNavigate = useCallback(() => {
    if (route) navigate(route);
  }, [navigate, route]);

  const handleSignOut = useCallback(async () => {
    await mutateAsync();
  }, [mutateAsync]);

  const renderIcon = useCallback(() => {
    if (label === 'contact') {
      return (
        <QuestionCircleOutlined
          style={{
            fontSize: '20px',
            padding: '8px 12px',
          }}
        />
      );
    } else if (label === 'sign in') {
      return (
        <UserOutlined
          style={{
            fontSize: '20px',
            padding: '8px 12px',
          }}
        />
      );
    } else {
      return (
        <MenuOutlined
          style={{
            fontSize: '20px',
            padding: '8px 12px',
          }}
        />
      );
    }
  }, [label]);

  const renderLinks = useCallback(() => {
    if (type === 'ghost') {
      return (
        <Tooltip placement='bottom' title={tooltip}>
          <Button
            type='text'
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px',
              minHeight: 'calc(var(--spacing_1x) * 12)',
              minWidth: 'calc(var(--spacing_1x) * 12)',
              lineHeight: '24px',
            }}>
            {label}
          </Button>
        </Tooltip>
      );
    } else if (type === 'icon') {
      return (
        <Tooltip placement='bottom' title={tooltip}>
          <Button
            type='text'
            icon={renderIcon()}
            style={{
              color: 'white',
              fontWeight: 'thin',
              fontSize: '16px',
              minHeight: 'calc(var(--spacing_1x) * 12)',
              minWidth: 'calc(var(--spacing_1x) * 12)',
              lineHeight: '24px',
            }}
          />
        </Tooltip>
      );
    } else if (type === 'button' && !user && label !== 'Sign out') {
      return (
        <Button
          onClick={handleNavigate}
          type='default'
          style={{
            color: 'var(--blue-action-foreground-color)',
            fontWeight: 'bold',
            fontSize: '14px',
            padding:
              'var(--spacing_1x) calc(var(--spacing_3x) + var(--button_inline_padding_extra, 0px))',
            minHeight: 'calc(var(--spacing_1x) * 9)',
            minWidth: 'calc(var(--spacing_1x) * 9)',
            lineHeight: '24px',
          }}>
          {label}
        </Button>
      );
    } else if (type === 'button' && user && label === 'Sign out') {
      return (
        <Button
          loading={isPending}
          onClick={handleSignOut}
          type='default'
          style={{
            color: 'var(--blue-action-foreground-color)',
            fontWeight: 'bold',
            fontSize: '14px',
            padding:
              'var(--spacing_1x) calc(var(--spacing_3x) + var(--button_inline_padding_extra, 0px))',
            minHeight: 'calc(var(--spacing_1x) * 9)',
            minWidth: 'calc(var(--spacing_1x) * 9)',
            lineHeight: '24px',
          }}>
          Sign out
        </Button>
      );
    }
  }, [
    handleNavigate,
    handleSignOut,
    isPending,
    label,
    renderIcon,
    tooltip,
    type,
    user,
  ]);

  return (
    <div
      style={{
        flexShrink: 0,
        pointerEvents: 'all',
        marginBlockStart: '8px',
      }}>
      {renderLinks()}
    </div>
  );
};

export default NavLink;
